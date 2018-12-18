interface LEDScreen {
  getPixelDensity: () => number;
}

class MyScreen implements LEDScreen {
  getPixelDensity = () => 2;
  //   private width: number;
  //   private height: number;
  constructor(private width: number, private height: number) {
    // this.width = width;
    // this.height = height;
  }

  //   get Width(): number {
  //     return this.width;
  //   }

  //   set Width(value: number) {
  //     this.Width = value;
  //   }

  //   get Height(): number {
  //     return this.height;
  //   }

  //   set Height(value: number) {
  //     if (value <= 0) throw new Error("invalid height");
  //     this.height = value;
  //}
}

let s1 = new MyScreen(1920, 1080);
