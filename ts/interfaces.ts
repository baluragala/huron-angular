interface Person {
  name: string;
  age: number;
}

interface PersonList {
  persons: Array<Person>;
}

let p: Person = { name: "abc", age: 10 };
p = { name: "abc", age: "10" };
