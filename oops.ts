class User {
  name: string;
  age: number

  // recommnended (inside class making a constructor)
  // constructor(name:string, age: number) {
  //   this.name = name;
  //   this.age = age;
  // }

  constructor(name:string, age: number) {
    this.name = name;
    this.age = age;
    // this := it is refer to the new object
    console.log(this);
  }

}

const newUser = new User("Jisu", 20)
newUser.name = "Jisu"


// access modifiers

class User2 {
  // public: default, can be accessed anywhere
  // private: can only be accessed within the class
  // protected: can be accessed within the class and subclasses (inheritance)

  public name: string = "Jisu";
  private age: number = 20;

  reveal() {
    return this.age; // ok
  }

}

const newUser2 = new User2();
newUser2.name = "Jisu"; // ok
// newUser2.age = 20; // error: Property 'age' is private and only accessible within class 'User2'.

class Payment {
  protected userName = "Jisu";
}

class Details extends Payment {
  getName() {
    return this.userName; // ok
  }
}

new Details().getName(); // ok for the subclass, but not for the instance of the subclass


class Wallet {
  #balance = 100;

  getBalance()  {
    return this.#balance; // ok
  }
}

const w = new Wallet();

// readonly properties

class Cup {
  readonly capacity: number = 500

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

// controlled access

class ModernUser {
  private _name = "Jisu";

  get name() {
    return this._name;
  }

  set name (value: string) {
    if (value.length < 3) {
      throw new Error("Name is too short");
    }
    this._name = value;

  }
}

// uses of above getter and setter

const modernUser = new ModernUser();
modernUser.name = "Jisu"; // ok
// modernUser.name = "Ji"; // error: Name is too short  




// static properties and methods

class  newUser3 {
 static newUserCount = 0;

 constructor(public name: string, public age: number) {}
}
console.log(newUser3.newUserCount);

abstract class Animal {
  abstract makeSound(): void;
  abstract name: string;
  abstract age: number;   
}

class Dog extends Animal {
    makeSound() {
  console.log("Woof!");
 } 
}

// composition over inheritance

class goddHeartPerson {
  heart() {
  
  }
}

class goodMindPerson {
  constructor(private heart: goddHeartPerson) {} 

  makeGoodDecision() {
    this.heart.heart(); // this is composition, we are using the heart of the goodHeartPerson class in the goodMindPerson class
  }
}