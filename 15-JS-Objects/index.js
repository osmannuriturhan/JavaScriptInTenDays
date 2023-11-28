let customer1 = {
  ad: "Osman",
  soyad: "Turhan",
  sehir: "İstanbul",
  yas: 25,
  products: ["Laptop", "Telefon", "Klavye"],
};

let customer2 = {
  ad: "Doğancan",
  soyad: "Karataş",
  sehir: "İstanbul",
  yas: 25,
  products: { phone: "iphone5", price: 10 },
};

let customer3 = {
  ad: "Mert",
  soyad: "Karataş",
  sehir: "İstanbul",
  yas: 25,
};

let musteriler = [customer1, customer2, customer3];

let urunler = [
  {
    id: 1,
    ad: "Laptop",
    fiyat: 1000,
    stok: 5,
  },
  {
    id: 2,
    ad: "Telefon",
    fiyat: 2000,
    stok: 3,
  },
  {
    id: 3,
    ad: "Klavye",
    fiyat: 100,
    stok: 10,
  },
];

console.log(urunler);
