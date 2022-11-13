const nilai = 45;

if (nilai % 2 === 0) {
    console.log(`nilai ${nilai} adalah genap`);
} else {
    console.log(`nilai ${nilai} adalah ganjil`);
}

nilai % 2 === 0 ? console.log(`nilai ${nilai} adalah genap`) : nilai >= 50 ? console.log("Nilai anda besar") : console.log("Nilai anda kecil");

console.log("=================================");
switch (nilai) {
    case 100:
        console.log("Nilai anda mendapatkan A");
        break;
    case 80:
        console.log("Nilai anda mendapatkan B");
        break;
    default:
        console.log("Nilai anda mendapatkan Hancur");
        break;
}