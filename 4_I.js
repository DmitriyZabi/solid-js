// Interface segregation principle

/* Неверно
class Animal {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log(`${this.name} умеет ходить`)
  }

  swim() {
    console.log(`${this.name} умеет плавать`)
  }

  fly() {
    console.log(`${this.name} умеет летать`)
  }
}

class Dog extends Animal {
  fly() {
    return null
  }
}

class Eagle extends Animal {
  swim() {
    return null
  }
}

class Whale extends Animal {
  fly() {
    return null
  }

  walk() {
    return null
  }
}

const dog = new Dog('Рэкс')
dog.walk()
dog.swim()
dog.fly()
const eagle = new Eagle('Орел')
eagle.walk()
eagle.swim()
eagle.fly()
const whale = new Whale('Кит')
whale.walk()
whale.swim()
whale.fly()
*/

class Animal {
  constructor(name) {
    this.name = name
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} умеет плавать`)
  },
}

const walker = {
  walk() {
    console.log(`${this.name} умеет ходить`)
  },
}

const flier = {
  fly() {
    console.log(`${this.name} умеет летать`)
  },
}

class Dog extends Animal {}

class Eagle extends Animal {}

class Whale extends Animal {}

Object.assign(Dog.prototype, walker, swimmer)
Object.assign(Eagle.prototype, walker, flier)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Рэкс')
dog.walk()
dog.swim()
const eagle = new Eagle('Орел')
eagle.walk()
eagle.fly()
const whale = new Whale('Кит')
whale.swim()
