// Simple file-backed store for demo purposes. Replace with DynamoDB/S3/SES in production.
import { loadStore, saveStore } from "./persistStore";

let contactMessages = [];
let consultations = [];

const boot = () => {
  const store = loadStore();
  contactMessages = store.contactMessages || [];
  consultations = store.consultations || [];
};
boot();

const nextId = (items) => (items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1);

export function addContactMessage(payload) {
  const record = {
    id: nextId(contactMessages),
    status: "new",
    createdAt: new Date().toISOString(),
    ...payload,
  };
  contactMessages.push(record);
  persist();
  return record;
}

export function listContactMessages() {
  return contactMessages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export function updateContactMessage(id, updates) {
  const idx = contactMessages.findIndex((m) => m.id === id);
  if (idx === -1) return null;
  contactMessages[idx] = { ...contactMessages[idx], ...updates };
  persist();
  return contactMessages[idx];
}

export function addConsultation(payload) {
  const record = {
    id: nextId(consultations),
    status: "new",
    createdAt: new Date().toISOString(),
    ...payload,
  };
  consultations.push(record);
  persist();
  return record;
}

export function listConsultations() {
  return consultations.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export function updateConsultation(id, updates) {
  const idx = consultations.findIndex((m) => m.id === id);
  if (idx === -1) return null;
  consultations[idx] = { ...consultations[idx], ...updates };
  persist();
  return consultations[idx];
}

function persist() {
  saveStore({ contactMessages, consultations });
}
