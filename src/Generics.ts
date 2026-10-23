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

pair("Hello", 42);
pair("World", { name: "Alice" });
pair({ name: "Alice" }, [1, 2, 3]);


// Add Generics Interfaces
interface Box<T> {
  content: T;
}

const numberBox:Box<number> = { content: 42 };
const numberBoxCup:Box<string> = { content: "42" };

// real life example of generics is api responses form state of react component and also in react hooks like useState, useEffect, useReducer, useContext, useMemo, useCallback, useRef, useImperativeHandle, useLayoutEffect, useDebugValue, useDeferredValue, useTransition, useId, useSyncExternalStore, useInsertionEffect

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const res:ApiResponse<{ name: string; age: number }> = {
  status: 200,
  data: { name: "Alice", age: 30 },
  message: "Success"
};