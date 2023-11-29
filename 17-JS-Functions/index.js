// let sayi1 = 10;
// let sayi2 = 20;
// let toplam = sayi1 + sayi2;
// let sayi3 = 20;
// let sayi4 = 30;
// let toplam2 = sayi3 + sayi4;

// console.log(toplam);
// console.log(toplam2);

//! basit toplama işlemi için fonksiyon kullanımı

// function topla(sayi1, sayi2) {
//   let toplam = sayi1 + sayi2;
//   console.log(toplam);
// }
// topla(10, 20);
// topla(20, 30);

//! gelişmiş toplama işlemi için fonksiyon kullanımı
// let toplam = 0;
// function topla(...sayilar) {
//   for (let sayi of sayilar) {
//     toplam += sayi;
//   }
// }

// topla(10, 20, 30, 40);
// console.log(toplam);

//! yas hesaplama
function yasHesapla(dogumYili) {
  return new Date().getFullYear() - dogumYili;
}

const hesapla = yasHesapla(1998);
console.log(hesapla);
// yasHesapla(1998);
