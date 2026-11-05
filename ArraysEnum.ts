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

