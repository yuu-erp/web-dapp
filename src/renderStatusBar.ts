class RenderStatusBar {
  height: number;
  idElement: string;
  constructor(height: number, idElement: string) {
    this.height = height;
    this.idElement = idElement;
  }

  init() {
    return this.html();
  }

  private html() {
    return `
        <div style="height: ${this.height}" id="${this.idElement}"></div>
    `;
  }
}

export default RenderStatusBar;
