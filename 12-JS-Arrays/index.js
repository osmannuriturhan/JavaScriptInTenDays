// const urun1 = "samsung";
// const urun2 = "apple";
// const urun3 = "huawei";

const urunler = ["samsung", "apple", "huawei"];
const fiyatlar = [10, 20, 30];
const urun1 = ["samsung", 10];
const urun2 = ["apple", 10];

const yeniUrun = ["samsung", 150, ["apple", 20]];

console.log(urunler[2]);
console.log(fiyatlar[2]);
console.log(urun1[1]);
console.log(yeniUrun[2][0]);

console.log(`Ürünümüz: ${urunler[2]} +  ${fiyatlar[2]}`);
