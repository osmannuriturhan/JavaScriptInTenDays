// let mert = parseInt(prompt("Lütfen Yaşınızı Giriniz:"));

// if (mert >= 18) {
//   console.log("Ehliyet Alabilir");
// } else {
//   console.log("Ehliyet Alamaz");
// }

let yas = 18;
let mezuniyet = "ortaokul";

if (yas >= 18 && (mezuniyet == "lise" || mezuniyet == "üniversite")) {
  console.log("Ehliyet Şartlarını karşıladığın için ehliyet alabilirsin");
} else if (yas < 18) {
  console.log("Dayan. Son bir senen");
} else {
  console.log("Ehliyet Şartlarını karşılamadığın için ehliyet alamazsın");
}
