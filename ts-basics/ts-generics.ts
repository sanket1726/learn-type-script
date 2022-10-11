//  Writer some here so that concepts about generics & modules will be cleared.

class Generics {
  constructor(private name: string, private age: number) {
    this.name = name
    this.age = age
  }

  getDetails() {
    return `Name is : ${this.name} & age is: ${this.age}`
  }
}

let gen = new Generics("Sanket Benade", 26)

console.log(gen.getDetails())
