class Animal {
    color = ""
    price = 0
    sayHi() {

    }
}

class Dog extends Animal {
    walk() {
        console.log("i'm walking on four legs");
    }
}

class Chicken extends Animal {
    walk() {
        console.log("i'm walking on two legs");
    }
}

const d = new Dog()
const c = new Chicken()