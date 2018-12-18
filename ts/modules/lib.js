"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function first(args) {
    return args[0];
}
exports.first = first;
function last(args) {
    return args[args.length - 1];
}
exports.last = last;
var lib = { first: first, last: last };
exports.default = lib;
