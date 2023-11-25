let url = "https://www.bilgisayargenetigi.com";
let youtube = "Bilgisayar Genetiği";
let result;

//! 1-Karakter sayısını bul.
result = url.length;
result = youtube.length;
result = youtube.replace(" ", "").length;

//! 2-Youtube değişkeni kaç karakterden oluşuyor
result = youtube.split(" ").length;
result = url.split(".").length;

//! 3-Kanal adı başlangıç kontrol
result = youtube.startsWith("Bilgisayar");
result = url.startsWith("https");
if (result) {
  console.log("Yapılacaklar.");
} else {
  console.log("False Döndü");
}

//! 4-Kelime Kontrolü
if (youtube.indexOf("rGenetiği") > -1) {
  console.log("calıştı");
} else {
  console.log("calışmadı");
}

//! 5-Url ve Youtube Değişken birleştir
youtube = youtube.toLowerCase().replace(" ", "-");
// url = url.replace("com", "com/");

let newUrl = url.replace(url, url + youtube);
newUrl = `${url}/${youtube}`;

console.log(newUrl);
