class ReadOnly {
  readonly name: string
  constructor(name: string) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

const readName = new ReadOnly("Sanket Benade")

console.log(readName.getName())
