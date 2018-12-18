var MyScreen = /** @class */ (function () {
    //   private width: number;
    //   private height: number;
    function MyScreen(width, height) {
        this.width = width;
        this.height = height;
        this.getPixelDensity = function () { return 2; };
        // this.width = width;
        // this.height = height;
    }
    return MyScreen;
}());
var s1 = new MyScreen(1920, 1080);
