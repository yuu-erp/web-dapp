import CalculateLayout from "./calculateLayout";
import "./styles/style.css";
import Variable from "./variable";

class Main extends CalculateLayout {
  variable: Variable;
  constructor() {
    super()
    this.variable = new Variable();
    this.variable.set("heightStatusBar", 30);
    this.variable.set("name", "Khải Hoàn");
  }
  init() {
    super.init();
    const { heightStatusBar, name } = this.variable.list()
    console.log("all: ", { heightStatusBar, name })
  }
}

const mainInstance = new Main();
mainInstance.init();
