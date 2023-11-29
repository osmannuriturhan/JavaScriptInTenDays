//! fonskiyonlar ve if blokları kendi scope'larını oluşturur.
//! var ile if block içerisinde scope sıkıntı yaratır.
//! let ve const ile block içi scope oluşumunu sağlayabilir.

let kullanici = "global scope: Osman";
const isim = "Emin";
isim = "Nur";

console.log(isim);

function isimYazdir() {
  var kullanici = "function scope: Doğancan";
  console.log(kullanici);
}

if (true) {
  let kullanici = "if scope: Mert";
  console.log(kullanici);
}

console.log(kullanici);
isimYazdir();
