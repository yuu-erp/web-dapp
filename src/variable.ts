class Variable {
  private variables: Record<string, any>;

  constructor() {
    this.variables = {};
  }

  // Phương thức `set` để gán giá trị cho một key
  set(key: string, value: any): void {
    this.variables[key] = value;
    console.log(`Set variable ${key} = ${value}`);
  }

  // Phương thức `get` để lấy giá trị của một key
  get(key: string): any | null {
    if (key in this.variables) {
      return this.variables[key];
    }
    console.log(`Variable ${key} not found.`);
    return null;
  }

  // Phương thức `remove` để xóa một key
  remove(key: string): void {
    if (key in this.variables) {
      delete this.variables[key];
      console.log(`Removed variable ${key}`);
    } else {
      console.log(`Variable ${key} not found.`);
    }
  }

  // Phương thức `list` để liệt kê tất cả các biến
  list(): Record<string, any> {
    console.log("Current variables:", this.variables);
    return this.variables
  }
}

export default Variable