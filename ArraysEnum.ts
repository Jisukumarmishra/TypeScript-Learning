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

// enum :- restrict the choice for the user to select from a predefined set of values
enum userRole {
  ADMIN,
  USER,
  GUEST,
  STAFF,
  CE0,
  CM0,
}

const user1 =  userRole.ADMIN;


// autoincrement value in the enum
enum Status {
  PENDING = 100,
  SERVED, // 101
  IN_PROGRESS,// 102
  COMPLETED,// 103
  CANCELLED,// 104
}

enum userRole {
  DEVELOPER = "DEVELOPER",
  DESIGNER = "DESIGNER",
  FINANCE = "FINANCE",
  MARKETING = "MARKETING",
  MANAGEMENT = "MANAGEMENT",
}

function getUserRole(role: userRole) {
  console.log(`User role is: ${role}`);
}

getUserRole(userRole.DEVELOPER); // Output: User role is: DEVELOPER 
getUserRole("DEVELOPER"); // Error: Argument of type '"DEVELOPER"' is not assignable to parameter of type 'userRole'.

// hetrogeneous enum :- enum that can have both string and number values
// not preferrable
enum RandomEnum {
  id = 1,
  NAME = "JISU"
}

const enum Sugars {
  low = 1,
  medium = 2,
  hight = 3,
}

const s = Sugars.low;

let t: [string, number] = ["Jisu", 21];
t.push("harsh"); // valid

