class Demo{
    firstName: string
    lastName: string
    constructor(firstName?: string, lastName?:string){
        // this.firstName = "";
        // this.lastName = "";
        this.firstName = "Sanket";
        this.lastName = "Benade";
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

let demoObj = new Demo();
console.log(demoObj.getFullName())