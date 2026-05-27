"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  CheckCircle2,
  Heading2,
  ImageIcon,
  List,
  ListOrdered,
  Loader2,
  Pilcrow,
  Plus,
  Save,
  Trash2,
  Upload,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { InsightArticle, InsightContentBlock } from "@/types";

type EditorProps = {
  mode: "new" | "edit";
  initial?: InsightArticle;
};

type Status = "idle" | "saving" | "saved" | "error";

const CATEGORY_OPTIONS = ["Positioning", "Decision Guide", "Operations", "Technology"];

export function InsightEditor({ mode, initial }: EditorProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(mode === "edit");
  const [category, setCategory] = useState(initial?.category ?? "Positioning");
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [author, setAuthor] = useState(initial?.author ?? "Future Logix Team");
  const [publishedAt, setPublishedAt] = useState(
    initial?.publishedAt ?? new Date().toLocaleString("en-US", { month: "long", year: "numeric" })
  );
  const [status, setStatus] = useState<"draft" | "published">(initial?.status ?? "draft");
  const [content, setContent] = useState<InsightContentBlock[]>(
    initial?.content?.length ? initial.content : [{ type: "paragraph", text: "" }]
  );
  const [coverImageKey, setCoverImageKey] = useState(initial?.coverImageKey ?? "");
  const [coverImageUrl, setCoverImageUrl] = useState(initial?.coverImageUrl ?? "");
  const [saveStatus, setSaveStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-fill slug from title until user edits it
  useEffect(() => {
    if (!slugTouched) setSlug(slugify(title));
  }, [title, slugTouched]);

  const wordCount = useMemo(() => {
    return content
      .map((block) => {
        if (block.type === "list") return block.items.map((i) => `${i.term ?? ""} ${i.description}`).join(" ");
        if (block.type === "orderedList") return block.items.join(" ");
        return block.text;
      })
      .join(" ")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
  }, [content]);

  function addBlock(type: InsightContentBlock["type"], afterIndex?: number) {
    const block = createBlock(type);
    setContent((prev) => {
      if (afterIndex === undefined) return [...prev, block];
      const next = [...prev];
      next.splice(afterIndex + 1, 0, block);
      return next;
    });
  }

  function updateBlock(index: number, updater: (block: InsightContentBlock) => InsightContentBlock) {
    setContent((prev) => prev.map((b, i) => (i === index ? updater(b) : b)));
  }

  function removeBlock(index: number) {
    setContent((prev) => (prev.length === 1 ? prev : prev.filter((_, i) => i !== index)));
  }

  function moveBlock(index: number, direction: -1 | 1) {
    setContent((prev) => {
      const target = index + direction;
      if (target < 0 || target >= prev.length) return prev;
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  function replaceWithBlocks(index: number, newBlocks: InsightContentBlock[]) {
    setContent((prev) => {
      const next = [...prev];
      next.splice(index, 1, ...newBlocks);
      return next;
    });
  }

  function handleSmartImport() {
    const raw = prompt(
      "Paste the full article text. Use blank lines between paragraphs, '# ' for headings, '- ' for bullets, '1. ' for numbered lists."
    );
    if (!raw) return;
    const blocks = parseTextToBlocks(raw);
    if (blocks.length) {
      setContent(blocks);
    }
  }

  async function handleCoverUpload(file: File) {
    if (!file) return;
    setUploading(true);
    setErrorMessage("");
    try {
      const res = await fetch("/api/admin/insights/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: slug || slugify(title) || "draft",
          contentType: file.type,
          size: file.size,
          extension: file.name.split(".").pop()?.toLowerCase() || "jpg",
        }),
      });
      const data = (await res.json()) as { uploadUrl?: string; key?: string; error?: string };
      if (!res.ok || !data.uploadUrl || !data.key) throw new Error(data.error || "Upload setup failed.");

      const putRes = await fetch(data.uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });
      if (!putRes.ok) throw new Error("Upload to S3 failed.");

      setCoverImageKey(data.key);
      setCoverImageUrl(URL.createObjectURL(file));
    } catch (e) {
      setErrorMessage(e instanceof Error ? e.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  async function handleSave(publish?: boolean) {
    setSaveStatus("saving");
    setErrorMessage("");

    const targetStatus = publish === true ? "published" : publish === false ? "draft" : status;

    const body = {
      slug: slug || slugify(title),
      category,
      title,
      excerpt,
      author,
      publishedAt,
      content,
      status: targetStatus,
      coverImageKey: coverImageKey || undefined,
    };

    try {
      const url = mode === "new" ? "/api/admin/insights" : `/api/admin/insights/${initial?.slug}`;
      const method = mode === "new" ? "POST" : "PUT";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await res.json()) as { article?: InsightArticle; error?: string };
      if (!res.ok || !data.article) throw new Error(data.error || "Save failed.");

      setStatus(targetStatus);
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 1800);

      if (mode === "new") {
        router.push(`/admin/insights/${data.article.slug}/edit`);
        router.refresh();
      }
    } catch (e) {
      setErrorMessage(e instanceof Error ? e.message : "Save failed.");
      setSaveStatus("error");
    }
  }

  const blockButton =
    "inline-flex items-center gap-1.5 rounded-full border border-border bg-white/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary";

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/admin/insights"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All insights
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          {saveStatus === "saved" ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Saved
            </span>
          ) : null}
          {saveStatus === "saving" ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Saving...
            </span>
          ) : null}
          <Button
            variant="outline"
            className="rounded-full bg-white/80"
            onClick={() => handleSave(false)}
            disabled={saveStatus === "saving"}
          >
            <Save className="mr-1.5 h-4 w-4" />
            Save draft
          </Button>
          <Button className="rounded-full" onClick={() => handleSave(true)} disabled={saveStatus === "saving"}>
            <CheckCircle2 className="mr-1.5 h-4 w-4" />
            {status === "published" ? "Update published" : "Publish"}
          </Button>
        </div>
      </div>

      {errorMessage ? (
        <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          {errorMessage}
        </div>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          <div className="bento-card p-6">
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="A clear, specific headline"
              className="mt-2 h-auto border-0 bg-transparent p-0 font-display text-3xl font-semibold tracking-tight text-foreground shadow-none focus-visible:ring-0"
            />

            <label className="mt-6 block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Excerpt
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              placeholder="One or two sentences summarizing the article."
              className="mt-2 w-full resize-none rounded-xl border border-border bg-white/80 px-4 py-3 text-sm leading-6 text-foreground placeholder:text-muted-foreground focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
          </div>

          <div className="bento-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">Content blocks</h3>
              <p className="text-xs text-muted-foreground">{wordCount} words</p>
            </div>

            <div className="mt-5 space-y-3">
              {content.map((block, index) => (
                <BlockEditor
                  key={index}
                  block={block}
                  index={index}
                  total={content.length}
                  onUpdate={(updater) => updateBlock(index, updater)}
                  onRemove={() => removeBlock(index)}
                  onMove={(dir) => moveBlock(index, dir)}
                  onAddAfter={(type) => addBlock(type, index)}
                  onSmartPaste={(blocks) => replaceWithBlocks(index, blocks)}
                />
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-5">
              <button type="button" className={blockButton} onClick={() => addBlock("paragraph")}>
                <Pilcrow className="h-3.5 w-3.5" />
                Paragraph
              </button>
              <button type="button" className={blockButton} onClick={() => addBlock("heading")}>
                <Heading2 className="h-3.5 w-3.5" />
                Heading
              </button>
              <button type="button" className={blockButton} onClick={() => addBlock("list")}>
                <List className="h-3.5 w-3.5" />
                Bulleted list
              </button>
              <button type="button" className={blockButton} onClick={() => addBlock("orderedList")}>
                <ListOrdered className="h-3.5 w-3.5" />
                Ordered list
              </button>
              <button
                type="button"
                className={`${blockButton} ml-auto border-primary/30 text-primary hover:border-primary hover:text-primary`}
                onClick={handleSmartImport}
                title="Paste a long article and auto-split into headings, paragraphs, and lists"
              >
                <Upload className="h-3.5 w-3.5" />
                Smart import
              </button>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bento-card p-6">
            <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">Metadata</h3>

            <div className="mt-4 space-y-4">
              <Field label="Slug">
                <Input
                  value={slug}
                  onChange={(e) => {
                    setSlug(slugify(e.target.value));
                    setSlugTouched(true);
                  }}
                  placeholder="my-article-slug"
                  disabled={mode === "edit"}
                />
                {mode === "edit" ? (
                  <p className="mt-1 text-xs text-muted-foreground">Slug can&apos;t be changed after creation.</p>
                ) : null}
              </Field>

              <Field label="Category">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-xl border border-border bg-white/80 px-4 py-2.5 text-sm text-foreground focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-ring/30"
                >
                  {CATEGORY_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Author">
                <Input value={author} onChange={(e) => setAuthor(e.target.value)} />
              </Field>

              <Field label="Published label">
                <Input
                  value={publishedAt}
                  onChange={(e) => setPublishedAt(e.target.value)}
                  placeholder="April 2026"
                />
                <p className="mt-1 text-xs text-muted-foreground">Shown next to the author byline.</p>
              </Field>
            </div>
          </div>

          <div className="bento-card p-6">
            <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">Cover image</h3>
            <p className="mt-1 text-xs text-muted-foreground">JPEG, PNG, WebP, or AVIF. Max 5MB.</p>

            {coverImageUrl ? (
              <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-2xl border border-border/60 bg-muted">
                <Image src={coverImageUrl} alt="Cover" fill className="object-cover" unoptimized />
              </div>
            ) : (
              <div className="mt-4 flex aspect-[16/9] items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30">
                <ImageIcon className="h-7 w-7 text-muted-foreground" strokeWidth={1.5} />
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) void handleCoverUpload(file);
              }}
            />

            <div className="mt-4 flex gap-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1 rounded-full bg-white/80"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
              >
                {uploading ? (
                  <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
                ) : (
                  <Upload className="mr-1.5 h-4 w-4" />
                )}
                {coverImageKey ? "Replace" : "Upload"}
              </Button>
              {coverImageKey ? (
                <Button
                  type="button"
                  variant="ghost"
                  className="rounded-full text-destructive hover:bg-destructive/10 hover:text-destructive"
                  onClick={() => {
                    setCoverImageKey("");
                    setCoverImageUrl("");
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              ) : null}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function BlockEditor({
  block,
  index,
  total,
  onUpdate,
  onRemove,
  onMove,
  onAddAfter,
  onSmartPaste,
}: {
  block: InsightContentBlock;
  index: number;
  total: number;
  onUpdate: (updater: (b: InsightContentBlock) => InsightContentBlock) => void;
  onRemove: () => void;
  onMove: (direction: -1 | 1) => void;
  onAddAfter: (type: InsightContentBlock["type"]) => void;
  onSmartPaste: (blocks: InsightContentBlock[]) => void;
}) {
  const label =
    block.type === "paragraph"
      ? "Paragraph"
      : block.type === "heading"
      ? "Heading"
      : block.type === "list"
      ? "Bulleted list"
      : "Ordered list";

  return (
    <div className="group rounded-2xl border border-border/70 bg-white/70 p-4 transition-colors hover:border-primary/25">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
        <div className="flex items-center gap-1 opacity-60 transition-opacity group-hover:opacity-100">
          <IconButton title="Move up" onClick={() => onMove(-1)} disabled={index === 0}>
            <ArrowUp className="h-3.5 w-3.5" />
          </IconButton>
          <IconButton title="Move down" onClick={() => onMove(1)} disabled={index === total - 1}>
            <ArrowDown className="h-3.5 w-3.5" />
          </IconButton>
          <IconButton title="Delete" onClick={onRemove} disabled={total === 1} destructive>
            <Trash2 className="h-3.5 w-3.5" />
          </IconButton>
        </div>
      </div>

      <div className="mt-3">
        {block.type === "paragraph" ? (
          <textarea
            value={block.text}
            onChange={(e) => onUpdate((b) => ({ ...b, type: "paragraph", text: e.target.value }))}
            onPaste={(e) => {
              const pasted = e.clipboardData.getData("text/plain");
              if (!pasted) return;
              // Only intercept if it looks like a multi-paragraph or markdown paste
              if (!/\n\s*\n|^#|^- |^\* |^\d+\. /m.test(pasted)) return;
              const isEmptyBlock = !block.text.trim();
              if (!isEmptyBlock) {
                if (!confirm("Detected a multi-section paste. Split into structured blocks?")) return;
              }
              e.preventDefault();
              const blocks = parseTextToBlocks(pasted);
              if (blocks.length) onSmartPaste(blocks);
            }}
            rows={4}
            placeholder="Write a paragraph, or paste a full article to auto-split..."
            className="w-full resize-none rounded-xl border border-transparent bg-transparent px-3 py-2 text-base leading-7 text-foreground focus:border-primary/30 focus:outline-none focus:ring-1 focus:ring-ring/30"
          />
        ) : block.type === "heading" ? (
          <input
            value={block.text}
            onChange={(e) => onUpdate((b) => ({ ...b, type: "heading", text: e.target.value }))}
            placeholder="Section heading"
            className="w-full rounded-xl border border-transparent bg-transparent px-3 py-2 font-display text-xl font-semibold tracking-tight text-foreground focus:border-primary/30 focus:outline-none focus:ring-1 focus:ring-ring/30"
          />
        ) : block.type === "list" ? (
          <BulletedListEditor block={block} onUpdate={(items) => onUpdate(() => ({ type: "list", items }))} />
        ) : (
          <OrderedListEditor block={block} onUpdate={(items) => onUpdate(() => ({ type: "orderedList", items }))} />
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5 border-t border-border/40 pt-3 opacity-60 transition-opacity group-hover:opacity-100">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground self-center">
          + add after
        </span>
        <MiniAdd onClick={() => onAddAfter("paragraph")}>Paragraph</MiniAdd>
        <MiniAdd onClick={() => onAddAfter("heading")}>Heading</MiniAdd>
        <MiniAdd onClick={() => onAddAfter("list")}>List</MiniAdd>
        <MiniAdd onClick={() => onAddAfter("orderedList")}>Ordered</MiniAdd>
      </div>
    </div>
  );
}

function BulletedListEditor({
  block,
  onUpdate,
}: {
  block: Extract<InsightContentBlock, { type: "list" }>;
  onUpdate: (items: { term?: string; description: string }[]) => void;
}) {
  return (
    <div className="space-y-2">
      {block.items.map((item, i) => (
        <div key={i} className="rounded-xl border border-border/60 bg-background/70 p-3">
          <Input
            value={item.term ?? ""}
            onChange={(e) => {
              const items = [...block.items];
              items[i] = { ...items[i], term: e.target.value || undefined };
              onUpdate(items);
            }}
            placeholder="Term (optional, shown in bold)"
            className="mb-2"
          />
          <textarea
            value={item.description}
            onChange={(e) => {
              const items = [...block.items];
              items[i] = { ...items[i], description: e.target.value };
              onUpdate(items);
            }}
            rows={2}
            placeholder="Description"
            className="w-full resize-none rounded-lg border border-border bg-white px-3 py-2 text-sm leading-6 text-foreground focus:border-primary/30 focus:outline-none focus:ring-1 focus:ring-ring/30"
          />
          {block.items.length > 1 ? (
            <button
              type="button"
              onClick={() => onUpdate(block.items.filter((_, j) => j !== i))}
              className="mt-2 text-xs text-destructive hover:underline"
            >
              Remove item
            </button>
          ) : null}
        </div>
      ))}
      <button
        type="button"
        onClick={() => onUpdate([...block.items, { description: "" }])}
        className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:border-primary/30 hover:text-primary"
      >
        <Plus className="h-3 w-3" />
        Add item
      </button>
    </div>
  );
}

function OrderedListEditor({
  block,
  onUpdate,
}: {
  block: Extract<InsightContentBlock, { type: "orderedList" }>;
  onUpdate: (items: string[]) => void;
}) {
  return (
    <div className="space-y-2">
      {block.items.map((item, i) => (
        <div key={i} className="flex items-start gap-2">
          <span className="mt-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
            {i + 1}
          </span>
          <textarea
            value={item}
            onChange={(e) => {
              const items = [...block.items];
              items[i] = e.target.value;
              onUpdate(items);
            }}
            rows={2}
            placeholder="Item"
            className="flex-1 resize-none rounded-lg border border-border bg-white px-3 py-2 text-sm leading-6 text-foreground focus:border-primary/30 focus:outline-none focus:ring-1 focus:ring-ring/30"
          />
          {block.items.length > 1 ? (
            <button
              type="button"
              onClick={() => onUpdate(block.items.filter((_, j) => j !== i))}
              className="mt-2 text-destructive hover:text-destructive/80"
              title="Remove"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          ) : null}
        </div>
      ))}
      <button
        type="button"
        onClick={() => onUpdate([...block.items, ""])}
        className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:border-primary/30 hover:text-primary"
      >
        <Plus className="h-3 w-3" />
        Add item
      </button>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function IconButton({
  children,
  onClick,
  title,
  disabled,
  destructive,
}: {
  children: React.ReactNode;
  onClick: () => void;
  title: string;
  disabled?: boolean;
  destructive?: boolean;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-white/80 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 ${
        destructive ? "hover:border-destructive/40 hover:text-destructive" : ""
      }`}
    >
      {children}
    </button>
  );
}

function MiniAdd({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-border bg-white/80 px-2.5 py-1 text-[10px] font-semibold text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
    >
      {children}
    </button>
  );
}

function parseTextToBlocks(raw: string): InsightContentBlock[] {
  const text = raw.replace(/\r\n/g, "\n").trim();
  if (!text) return [];

  // Split on blank lines (one or more) into chunks
  const chunks = text.split(/\n\s*\n+/);
  const blocks: InsightContentBlock[] = [];

  for (const chunk of chunks) {
    const trimmed = chunk.trim();
    if (!trimmed) continue;
    const lines = trimmed.split("\n").map((l) => l.trimEnd());

    // Heading: a single line starting with one or more '#'
    if (lines.length === 1) {
      const headingMatch = lines[0].match(/^#{1,6}\s+(.+)$/);
      if (headingMatch) {
        blocks.push({ type: "heading", text: headingMatch[1].trim() });
        continue;
      }
    }

    // Ordered list: every line starts with "n. " or "n) "
    if (lines.every((l) => /^\d+[.)]\s+/.test(l))) {
      blocks.push({
        type: "orderedList",
        items: lines.map((l) => l.replace(/^\d+[.)]\s+/, "").trim()).filter(Boolean),
      });
      continue;
    }

    // Bulleted list: every line starts with "- ", "* ", or "• "
    if (lines.every((l) => /^[-*•]\s+/.test(l))) {
      blocks.push({
        type: "list",
        items: lines.map((l) => {
          const stripped = l.replace(/^[-*•]\s+/, "").trim();
          // Optional bold term: "**Term**: rest" or "Term: rest"
          const termMatch = stripped.match(/^\*\*([^*]+)\*\*\s*[:\-—]\s*(.+)$/);
          if (termMatch) return { term: termMatch[1].trim(), description: termMatch[2].trim() };
          return { description: stripped };
        }),
      });
      continue;
    }

    // Default: paragraph (multi-line joined with single newlines preserved)
    blocks.push({ type: "paragraph", text: lines.join("\n") });
  }

  return blocks;
}

function createBlock(type: InsightContentBlock["type"]): InsightContentBlock {
  switch (type) {
    case "heading":
      return { type: "heading", text: "" };
    case "list":
      return { type: "list", items: [{ description: "" }] };
    case "orderedList":
      return { type: "orderedList", items: [""] };
    default:
      return { type: "paragraph", text: "" };
  }
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
