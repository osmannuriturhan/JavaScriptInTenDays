// let meyve = ["elma", "armut", "muz", "portakal", "karpuz"];

// console.log(meyve[0]);
// console.log(meyve[1]);
// console.log(meyve[2]);
// console.log(meyve[3]);
// console.log(meyve[4]);

// for (let i = 0; i < meyve.length; i++) {
//   console.log(meyve[i]);
// }

//! 0'dan 100'e kadar olan sayıları yazdırın.

// for (let i = 0; i <= 100; i = i + 2) {
//   console.log(i);
// }

//! sayı toplama

// let sayilar = [10, 20, 5, 50, 100, 200];
// console.log(
//   sayilar[0] + sayilar[1] + sayilar[2] + sayilar[3] + sayilar[4] + sayilar[5]
// );

// let toplam = 0;
// for (let i = 0; i < sayilar.length; i++) {
//   console.log((toplam = toplam + sayilar[i]));
// }

//! kısayol index
// let sayilar = [10, 20, 5, 50, 100, 200];
// let toplam = 0;

// for (let i in sayilar) {
//   console.log((toplam += sayilar[i]));
// }

//! direk sayıları alma
// let sayilar = [10, 20, 5, 50, 100, 200];
// let toplam = 0;
// for (let sayi of sayilar) {
//   console.log((toplam += sayi));
// }

//! object ile döngü

// const user = {
//   ad: "Osman",
//   soyad: "Turhan",
//   email: "osmn.turhn25@gmail.com",
//   yas: 25,
// };

// for (let key in user) {
//   console.log(user[key]);
// }

//! çoklu kullanıcı

let users = [
  {
    id: "1",
    ad: "Osman",
    soyad: "Turhan",
    email: "osmn.turhn25@gmail.com",
    yas: 25,
  },
  {
    id: "2",
    ad: "Doğancan",
    soyad: "Karataş",
    email: "osmn.turhn25@gmail.c",
    yas: 25,
  },
  {
    id: "3",
    ad: "Mert",
    soyad: "Karataş",
    email: "osmn.turhn25@gmail.co",
    yas: 25,
  },
];

for (let i = 0; i < users.length; i++) {
  console.log(users[i].ad);
}

// console.log(users[0].ad);
// console.log(users[1].ad);
// console.log(users[2].ad);
