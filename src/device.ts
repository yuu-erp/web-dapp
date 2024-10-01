// Device.ts
class Device {
  private userAgent: string;
  private width: number;
  private height: number;

  constructor() {
    this.userAgent = navigator.userAgent.toLowerCase();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  // Phương thức xác định loại thiết bị
  public getDeviceType(): string {
    if (/iphone|ipod/.test(this.userAgent)) {
      return "iPhone";
    } else if (/ipad/.test(this.userAgent)) {
      return "iPad";
    } else if (
      /android/.test(this.userAgent) &&
      /mobile/.test(this.userAgent)
    ) {
      return "Android Phone";
    } else if (
      /android/.test(this.userAgent) &&
      !/mobile/.test(this.userAgent)
    ) {
      return "Android Tablet";
    } else if (this.width < 768) {
      return "Small Device (Phone)";
    } else if (this.width >= 768 && this.width <= 1024) {
      return "Tablet";
    } else {
      return "Desktop";
    }
  }

  // Phương thức kiểm tra hướng của thiết bị
  public getOrientation(): string {
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    return isPortrait ? "Portrait" : "Landscape";
  }

  // Phương thức kiểm tra có phải là thiết bị di động không
  public isMobile(): boolean {
    return (
      /iphone|ipod|android.*mobile/.test(this.userAgent) || this.width < 768
    );
  }

  // Phương thức lắng nghe sự thay đổi kích thước màn hình
  public onResize(callback: () => void): void {
    window.addEventListener("resize", callback);
  }
}

export default Device;
