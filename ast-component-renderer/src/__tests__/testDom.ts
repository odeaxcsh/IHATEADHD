class MockElement {
  public readonly tagName: string;
  public className = "";
  public children: MockElement[] = [];
  public parentElement: MockElement | null = null;
  public dataset: Record<string, string> = {};
  private attributes: Record<string, string> = {};

  constructor(tagName: string) {
    this.tagName = tagName.toUpperCase();
  }

  appendChild(child: MockElement): MockElement {
    child.remove();
    child.parentElement = this;
    this.children.push(child);
    return child;
  }

  append(...nodes: MockElement[]): void {
    for (const node of nodes) this.appendChild(node);
  }

  insertBefore(child: MockElement, reference: MockElement | null): MockElement {
    child.remove();
    child.parentElement = this;
    if (!reference) {
      this.children.push(child);
      return child;
    }
    const idx = this.children.indexOf(reference);
    if (idx === -1) {
      this.children.push(child);
    } else {
      this.children.splice(idx, 0, child);
    }
    return child;
  }

  get nextSibling(): MockElement | null {
    if (!this.parentElement) return null;
    const siblings = this.parentElement.children;
    const idx = siblings.indexOf(this);
    if (idx === -1 || idx + 1 >= siblings.length) return null;
    return siblings[idx + 1];
  }

  contains(target: MockElement): boolean {
    if (target === this) return true;
    return this.children.some(child => child.contains(target));
  }

  closest(selectorList: string): MockElement | null {
    const selectors = selectorList.split(/\s*,\s*/);
    let current: MockElement | null = this;
    while (current) {
      if (selectors.some(sel => matches(current!, sel))) {
        return current;
      }
      current = current.parentElement;
    }
    return null;
  }

  querySelectorAll(selectorList: string): MockElement[] {
    const selectors = selectorList.split(/\s*,\s*/);
    const out: MockElement[] = [];
    const visit = (node: MockElement) => {
      if (selectors.some(sel => matches(node, sel))) out.push(node);
      for (const child of node.children) visit(child);
    };
    for (const child of this.children) visit(child);
    return out;
  }

  setAttribute(name: string, value: string): void {
    if (name === "class" || name === "className") {
      this.className = value;
      return;
    }
    this.attributes[name] = value;
  }

  getAttribute(name: string): string | undefined {
    if (name === "class" || name === "className") return this.className;
    return this.attributes[name];
  }

  remove(): void {
    if (!this.parentElement) return;
    const siblings = this.parentElement.children;
    const idx = siblings.indexOf(this);
    if (idx >= 0) siblings.splice(idx, 1);
    this.parentElement = null;
  }
}

class MockBody extends MockElement {
  constructor() {
    super("body");
  }

  set innerHTML(_value: string) {
    for (const child of [...this.children]) child.remove();
  }

  get innerHTML(): string {
    return "";
  }
}

class MockDocument {
  public readonly body: MockBody;

  constructor() {
    this.body = new MockBody();
  }

  createElement(tagName: string): HTMLElement {
    return new MockElement(tagName) as unknown as HTMLElement;
  }
}

function matches(el: MockElement, selector: string): boolean {
  const trimmed = selector.trim();
  if (!trimmed) return false;

  let tagPart = "";
  let classParts: string[] = [];

  if (trimmed.startsWith(".")) {
    classParts = trimmed.slice(1).split(".");
  } else if (trimmed.includes(".")) {
    const [tag, ...classes] = trimmed.split(".");
    tagPart = tag;
    classParts = classes;
  } else {
    tagPart = trimmed;
  }

  if (tagPart && !tagPart.startsWith("#") && !tagPart.startsWith("[")) {
    if (el.tagName !== tagPart.toUpperCase()) return false;
  }

  if (classParts.length) {
    const classList = el.className.split(/\s+/).filter(Boolean);
    for (const cls of classParts) {
      if (!cls) continue;
      if (!classList.includes(cls)) return false;
    }
  }

  return true;
}

export function setupDom() {
  const document = new MockDocument();
  (globalThis as any).document = document;
  (globalThis as any).window = (globalThis as any).window || {};
  if (!(globalThis as any).window.CSS) {
    (globalThis as any).window.CSS = {
      escape: (value: string) => value.replace(/["\\#.;?*+~^$[\]()=>|/]/g, "\\$&")
    };
  }
  return document;
}

export type MockDocumentType = MockDocument;
export type MockElementType = MockElement;
