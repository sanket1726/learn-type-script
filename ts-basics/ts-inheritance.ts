class Person {
  firstName: string
  lastName: string
  constructor(firstName: string = "", lastName: string = "") {
    this.firstName = firstName
    this.lastName = lastName
  }

  //   greet() {
  //     return `Hello this is Hi from Person ${this.firstName} ${this.lastName}!`
  //   }
  greet() {
    console.log(`Hello this is Hi from Person!`)
  }
}

class Programmer extends Person {
  //   greet() {
  //     return `Hello this is Hi from Programmer ${this.firstName} ${this.lastName}!`
  //   }

  greet() {
    console.log(`Hello this is Hi from Programmer!`)
  }

  greetLikeNormalPerson() {
    super.greet()
  }
}

// let personObj = new Person("Sanket", "Benade")

// let programmerObj = new Programmer("Sanket", "Benade")

let programmerObj: Programmer = new Programmer()

let programmerObj2: Person = new Programmer()

let call = programmerObj.greetLikeNormalPerson()

// Property 'greetLikeNormalPerson' does not exist on type 'Person'.
// let call2 = programmerObj2.greetLikeNormalPerson()
