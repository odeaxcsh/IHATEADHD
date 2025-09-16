import type { ComponentRegistry, RegistryEntry, ComponentRenderer } from "./types";

export class InMemoryRegistry implements ComponentRegistry {
  private map = new Map<string, ComponentRenderer>();
  register(entry: RegistryEntry) { this.map.set(entry.type, entry.renderer); }
  get(type: string) { return this.map.get(type); }
  listTypes() { return [...this.map.keys()]; }
}
