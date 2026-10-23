// gereric is templete that make code is reusable and type safe(interface is also templete)

function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("Hello");
wrapInArray(42);
wrapInArray({ name: "Alice", age: 30 });

// Generics Is Mainly used For Degin a Library or Framework

function pair<A, B>(a: A, b:B): [A, B]{
  return [a, b];
}