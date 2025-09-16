export class FakeElement {
  tagName: string;
  className = "";
  parentElement: FakeElement | null = null;
  children: FakeElement[] = [];
  private attrs = new Map<string, string>();

  constructor(tagName: string) {
    this.tagName = tagName.toUpperCase();
  }

  appendChild(child: FakeElement): FakeElement {
    child.remove();
    child.parentElement = this;
    this.children.push(child);
    return child;
  }

  insertBefore(child: FakeElement, reference: FakeElement | null): FakeElement {
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

  remove(): void {
    if (!this.parentElement) return;
    const siblings = this.parentElement.children;
    const idx = siblings.indexOf(this);
    if (idx >= 0) siblings.splice(idx, 1);
    this.parentElement = null;
  }

  get firstChild(): FakeElement | null {
    return this.children[0] ?? null;
  }

  get lastChild(): FakeElement | null {
    return this.children[this.children.length - 1] ?? null;
  }

  get nextSibling(): FakeElement | null {
    if (!this.parentElement) return null;
    const siblings = this.parentElement.children;
    const idx = siblings.indexOf(this);
    return idx >= 0 && idx + 1 < siblings.length ? siblings[idx + 1] : null;
  }

  closest(selector: string): FakeElement | null {
    let current: FakeElement | null = this;
    while (current) {
      if (current.matches(selector)) return current;
      current = current.parentElement;
    }
    return null;
  }

  querySelectorAll(selectorList: string): FakeElement[] {
    const selectors = selectorList.split(",").map(s => s.trim()).filter(Boolean);
    const results: FakeElement[] = [];
    const visit = (node: FakeElement) => {
      if (selectors.some(sel => node.matches(sel))) results.push(node);
      for (const child of node.children) visit(child);
    };
    for (const child of this.children) visit(child);
    return results;
  }

  setAttribute(name: string, value: string): void {
    this.attrs.set(name, value);
  }

  getAttribute(name: string): string | null {
    return this.attrs.get(name) ?? null;
  }

  matches(selector: string): boolean {
    if (!selector) return false;
    const [tagPart, ...classParts] = selector.split(".");
    if (tagPart && tagPart !== "*") {
      if (tagPart.toUpperCase() !== this.tagName) return false;
    }
    if (classParts.length) {
      const classSet = new Set(this.className.split(/\s+/).filter(Boolean));
      return classParts.every(cls => classSet.has(cls));
    }
    return true;
  }
}

export class FakeDocument {
  createElement(tagName: string): FakeElement {
    return new FakeElement(tagName);
  }
}

export function installDom() {
  const doc = new FakeDocument();
  (globalThis as any).document = doc;
  return doc;
}
