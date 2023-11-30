//! object

// let araba = {
//   renk: "mavi",
//   hiz: 0,
// };

// console.log(araba.renk);
// console.log(araba.hiz);

//! method

// let araba = {
//   renk: "mavi",
//   hiz: 0,
//   hizlandir: function (deger) {
//     this.hiz += deger;
//   },
// };

// araba.hizlandir(30);
// console.log(araba.hiz);

//! constructor ES5

// function Araba(renk, hiz) {
//   this.renk = renk;
//   this.hiz = hiz;
// }

// Araba.prototype.hizlandir = function (deger) {
//   this.hiz += deger;
// };

// const araba = new Araba("kirmizi", 50);

// console.log(araba.renk);
// araba.hizlandir(100);
// console.log(araba.hiz);

//! constructor ES6

// class Araba {
//   constructor(renk, hiz) {
//     this.renk = renk;
//     this.hiz = hiz;
//   }

//   hizlandir(deger) {
//     this.hiz += deger;
//   }
// }

// let araba = new Araba("siyah", 50);
// console.log(araba.renk);

//! class

// class Araba {
//   constructor(renk) {
//     this.renk = renk;
//     this.hiz = 0;
//   }

//   hizlandir(deger) {
//     this.hiz += deger;
//   }
// }

// let araba = new Araba("siyah");
// araba.hizlandir(50);
// console.log(araba.renk);
// console.log(araba.hiz);

//! inheritance

// class Araba {
//   constructor(renk) {
//     this.renk = renk;
//   }
// }

// class MotorluAraba extends Araba {
//   constructor(renk, motor) {
//     super(renk);
//     this.motor = motor;
//   }
// }

// let motorAraba = new MotorluAraba("nando-gray", "V8");
// let araba = new Araba("red");

// console.log(motorAraba.renk); // nando-gray
// console.log(motorAraba.motor); // V8
// console.log(araba.renk); // red

//! encapsulation

// class Araba {
//   #renk;
//   constructor(renk, hiz) {
//     this.#renk = renk;
//     this.hiz = hiz;
//   }

//   getRenk() {
//     return this.#renk;
//   }

//   setRenk(renk) {
//     this.#renk = renk;
//   }
// }

// const araba = new Araba("red", 10);
// console.log(araba.getRenk());
// araba.setRenk("blue");
// console.log(araba.getRenk());

//! polymorphism

// class Shape {
//   draw() {
//     console.log("Şekil çiziliyor.");
//   }
// }

// class Circle extends Shape {
//   draw(radius) {
//     console.log(`${radius} yarıçaplı daire çiziliyor.`);
//   }
// }

// let shape = new Shape();
// let circle = new Circle();
// console.log(circle.draw("20"));

//! abstraction

class Database {
  constructor(data) {
    this._data = data;
  }
  getData() {
    return this._data;
  }
  setData(value) {
    this._data = value;
  }
}

class DataController extends Database {
  constructor(data) {
    super(data);
  }
  getData() {
    return "Data : " + super.getData();
  }
}

const database = new Database("Osman");
const dataController = new DataController("Doğancan");

console.log(database._data); // Osman
dataController.setData("Mert");
console.log(dataController._data); // Mert
