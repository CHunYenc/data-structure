class Circle {
  // 半徑
  constructor(r) {
    this.radius = r;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

let c1 = new Circle(5);
console.log(c1.radius);
console.log(c1.getArea());
