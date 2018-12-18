// function calculatePrice(
//   price: number,
//   tax?: number,
//   disc: number = 10
// ): number {
//   return price + (price * tax) / 100 - disc;
// }
// console.log(calculatePrice(1000));
var calculatePrice = function (price, tax, disc) {
    if (disc === void 0) { disc = 10; }
    return price + (price * tax) / 100 - disc;
};
console.log(calculatePrice(1000));
function add(x, y) {
    if (typeof x == "string" && typeof y == "string")
        return "" + (x + y);
    if (typeof x == "number" && typeof y == "number")
        return "" + (x + y);
}
