// gereric is templete that make code is reusable and type safe(interface is also templete)

function wrapInArray<T>(item: T): T[] {
  return [item];
}