let suankiYil = new Date().getFullYear();
let gecmeNotu = 45;

let ogr1 = "Mert Demir";
let ogr1DogumYil = 2001;
let ogr1Yas = suankiYil - ogr1DogumYil;
let ogr1DersNot1 = 100;
let ogr1DersNot2 = 90;
let ogr1DersNot3 = 10;
let ogr1NotOrtalaması = (ogr1DersNot1 + ogr1DersNot2 + ogr1DersNot3) / 3;
console.log(parseInt(ogr1NotOrtalaması));
let ogr1DersDurum = ogr1NotOrtalaması > gecmeNotu;
console.log(ogr1DersDurum);

let ogr2 = "Eylül Demir";
let ogr2DogumYil = 2002;
let ogr2Yas = suankiYil - ogr2DogumYil;
console.log(ogr2Yas);
let ogr2DersNot1 = 60;
let ogr2DersNot2 = 30;
let ogr2DersNot3 = 50;
let ogr2NotOrtalaması = (ogr2DersNot1 + ogr2DersNot2 + ogr2DersNot3) / 3;
console.log(parseInt(ogr2NotOrtalaması));
let ogr2DersDurum = ogr2NotOrtalaması > gecmeNotu;
console.log(ogr2DersDurum);

console.log("1. Öğrenci Geçme Durumu :", ogr1DersDurum);
console.log("2. Öğrenci Geçme Durumu :", ogr2DersDurum);
