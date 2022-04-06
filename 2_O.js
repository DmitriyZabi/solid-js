// Open close principle

/* Неверно
class Square {
  constructor(size) {
    this.type = 'square'
    this.size = size
  }
}

class Circle {
  constructor(radius) {
    this.type = 'circle'
    this.radius = radius
  }
}

class Rectangle {
  constructor(width, height) {
    this.type = 'rectangle'
    this.width = width
    this.height = height
  }
}

class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes
  }

  area() {
    return this.shapes.reduce((acc, shape) => {
      switch (shape.type) {
        case 'square':
          acc += shape.size ** 2
          break
        case 'circle':
          acc += shape.radius ** 2 * Math.PI
          break
        case 'rectangle':
          acc += shape.width * shape.height
          break
      }
      return acc
    }, 0)
  }
}

const calc = new AreaCalculator([new Square(10), new Circle(1), new Circle(5)])
console.log(calc.area())
*/

class Shape {
  area() {
    throw Error('Area method should be implemented')
  }
}

class Square extends Shape {
  constructor(size) {
    super()
    this.size = size
  }

  area = () => this.size ** 2
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }
  area = () => this.radius ** 2 * Math.PI
}

class Rectangle extends Shape {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }

  area = () => this.width * this.height
}

class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes
  }

  area() {
    return this.shapes.reduce((acc, shape) => acc + shape.area(), 0)
  }
}

const calc = new AreaCalculator([new Square(10), new Circle(1), new Circle(5)])
console.log(calc.area())
