class User {
  name: string:
  age: number

  // recommnended (inside class making a constructor)
  constructor(name:string, age: number) {
    this.name = name;
    this.age = age;
  }

}

const newUser = new User("Jisu", 20)
newUser.name = "Jisu"