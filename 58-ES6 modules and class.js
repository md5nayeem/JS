import { message } from "./58-module.js"
console.log(message)


class student {
    constructor(id, name) {
        this.id = id;
        this.name = name
    }

    set studentName(name) {
        this.name = name
    }

    get studentInfo() {
        return this.name + " " + this.id
    }
}
let s1 = new student(101, "Nayeem")
console.log(s1)

s1.name = "asdf"
console.log(s1.name)

console.log(s1.studentInfo)