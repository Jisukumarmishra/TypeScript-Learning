const userName: string[] = ["Jisu", "harsh", "Sakashi"]
const userAge: number[] = [10, 20, 30]

const rating: Array<number> = [4.5, 4, 3, 5];

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

const users: User[] = [
  { name: "Jisu", age: 10, isAdmin: true },
  { name: "harsh", age: 20, isAdmin: false },
  { name: "Sakashi", age: 30, isAdmin: true },
];
users.push({ name: "Jisu", age: 10, isAdmin: true }); // valid

// readonly array in typescript :-- array that we can define it but not modify it after defining it
const cities: readonly string[] = ["Delhi", "Motihari", "patna"];
cities.push("Mumbai"); // Error: Property 'push' does not exist on type 'readonly string[]

// multidimensional array in typescript :-- array that can have multiple dimensions
const table: number[][] = [
  [1,2,3],
  [4,5,6],
]


// tuple in typescript :-- array that can have multiple types of data
let userTuple:[string, number, boolean,]

userTuple = ["Jisu", 21, true]
userTuple = [21, "Jisu", true] // order matter

let userInfo:[string, number, boolean, string?];
userInfo = ["Jisu", 21, true]

const location: readonly [number, number] = [19.0760, 72.8777]; // readonly tuple

// named tuple in typescript :-- tuple that can have names for each element

const userDetails: [name: string, age: number, isAdmin: boolean, location?: string] = ["Jisu", 21, true, "Delhi"]; // more preferred way to define tuple in typescript



