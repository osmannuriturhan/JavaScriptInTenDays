let tarih = new Date();

let result;

result = tarih.getDate(); //* gün
result = tarih.getDay(); //* 0 = pazar, 6 = cumartesi
result = tarih.getFullYear(); //* yıl
result = tarih.getHours(); //* saat
result = tarih.getTime(); //* milisaniye

//! Tarihi Güncelleme Methotları - Set Methods
// tarih.setFullYear(2025);
tarih.setMonth(2);
tarih.setDate(15);
result = tarih;

//! Doğum Tarihi
let dogumTarihi = new Date(1997, 5, 16);
result = tarih.getFullYear() - dogumTarihi.getFullYear();

console.log(result);
