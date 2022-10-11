interface Person {
  firstName: string
  lastName: string
  getFullName(): string
}

class MyPerson implements Person {
  //   firstName: string
  //   lastName: string

  constructor(public firstName: string, public lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  setFirstName(firstName: string) {
    this.firstName = firstName
  }

  getFirstName(): string {
    return this.firstName
  }

  setLastName(lastName: string) {
    this.lastName = lastName
  }

  getLastName(): string {
    return this.lastName
  }

  getFullName(): any {
    console.log(`${this.firstName} ${this.lastName}`)
  }
}

// Duck-Typing
const obj = {
  firstName: "Krishna",
  lastName: "Vasudev",
  getFullName: () => obj.firstName + " " + obj.lastName,
}

let aPerson: Person = new MyPerson("Sanket", "Benade")
// aPerson = obj
aPerson.getFullName()
