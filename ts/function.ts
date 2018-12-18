// function calculatePrice(
//   price: number,
//   tax?: number,
//   disc: number = 10
// ): number {
//   return price + (price * tax) / 100 - disc;
// }

// console.log(calculatePrice(1000));

let calculatePrice: (price: number, tax?: number, disc?: number) => number = (
  price: number,
  tax?: number,
  disc: number = 10
): number => {
  return price + (price * tax) / 100 - disc;
};

console.log(calculatePrice(1000));

function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: number, y: number): string;
function add(x: string | number, y: string | number): number | string {
  if (typeof x == "string" && typeof y == "string") return `${x + y}`;
  if (typeof x == "number" && typeof y == "number") return `${x + y}`;
}
