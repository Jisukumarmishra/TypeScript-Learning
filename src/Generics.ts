// gereric is templete that make code is reusable and type safe(interface is also templete)

function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("Hello");
wrapInArray(42);
wrapInArray({ name: "Alice", age: 30 });