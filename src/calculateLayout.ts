import Variable from "./variable";

class CalculateLayout extends Variable {
  constructor() {
    super();
    this.set("heightStatusBar", 60);
    this.set("heightSearchField", 60);
    this.set("windowWidth", window.innerWidth);
    this.set("windowHeight", window.innerHeight);
    this.set("heightDock", 0);
  }

  init() {
    console.log(this.list());
  }
}

export default CalculateLayout;
