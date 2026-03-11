export default function Loading() {
  return (
    <div className="section-shell">
      <div className="container mx-auto space-y-6">
        <div className="animate-pulse rounded-[1.75rem] border border-border bg-white/70 p-6 shadow-soft">
          <div className="h-8 w-32 rounded-full bg-primary/10" />
          <div className="mt-6 h-12 w-2/3 rounded-2xl bg-primary/10" />
          <div className="mt-4 h-6 w-full rounded-xl bg-secondary/10" />
          <div className="mt-2 h-6 w-5/6 rounded-xl bg-secondary/10" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="h-40 rounded-[1.5rem] bg-primary/10" />
            <div className="h-40 rounded-[1.5rem] bg-secondary/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
