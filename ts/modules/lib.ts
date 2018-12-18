export function first(args: Array<string>): string {
  return args[0];
}

export function last(args: Array<string>): string {
  return args[args.length - 1];
}

const lib = { first, last };
export default lib;
