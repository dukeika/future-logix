import fs from "fs";
import path from "path";

const storePath = path.join(process.cwd(), "data", "submissions.json");

const defaultStore = {
  contactMessages: [],
  consultations: [],
};

export function loadStore() {
  try {
    const raw = fs.readFileSync(storePath, "utf-8");
    const parsed = JSON.parse(raw);
    if (!parsed.contactMessages || !parsed.consultations) {
      throw new Error("Invalid store shape");
    }
    return parsed;
  } catch (err) {
    console.warn("Falling back to empty submission store", err?.message);
    return { ...defaultStore };
  }
}

export function saveStore(store) {
  const data = JSON.stringify(store, null, 2);
  fs.mkdirSync(path.dirname(storePath), { recursive: true });
  fs.writeFileSync(storePath, data, "utf-8");
}
