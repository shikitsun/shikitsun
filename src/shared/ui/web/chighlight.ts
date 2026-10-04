export class CHighlighComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.setHTMLUnsafe(`
      <slot></slot>
    `);
  }

  connectedCallback() {
    this.style.setProperty(
      "color",
      this.getAttribute("c") || "var(--color-accent-teal)",
    );
    this.style.display = "inline-block";
  }
}
