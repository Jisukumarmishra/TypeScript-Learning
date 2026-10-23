// the main goal of interface is give the shape of the object/ data


interface Animal {
  color : string;
  sound : string;
  price : number;
  run? : boolean;
}

const Dog : Animal = { // interface always define the structure of the object;
  color : "Black",
  price :300,
}

interface animalShop {
  readonly id: number,
  name : string
}

const s:animalShop = {id: 1, name: "Animal Shop"}
// s.id = 2

interface discountCalculator {
  (price : number) : number
}

const apply50: discountCalculator = (p) => p * 0.5


interface TeaMachine {
  start(): void; // both are the index signature
  stop() : void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  }
}


interface ChaiRatings {
  [flavor: string]: number
}

const rating: ChaiRatings = {
  masala: 4.5,
  ginger: 4.5,
}

// merging of interface features : at whenever any functions  is defined its follow the defined all interface structure

interface User {
  name:string;
}

interface User {
  age: number
}

const u: User = {
  name: "Jisu",
  age:21
}

// extending of interface
interface A {
  a:string,
}
interface B {
  b:string,
}

interface C extends A, B {
  // write the structure of the object
}