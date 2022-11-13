let name = "Fatahillah Mahendra";
let age = 14;
let uang = 400000;
let harga = 0;

if (name == "") {
    console.log("Anda tidak boleh masuk!");
} else if (age <= 17) {
    let harga = uang - 50000;
    if (uang >= 50000) {
        console.log("Anda Bisa Memesan Minum. Sisa Uang Anda Rp. " + harga);
    } else {
        console.log("Uang tidak cukup. Anda harus pulang.");
    }
} else {
    let harga = uang - 300000;
    if (uang >= 300000) {
        console.log("Anda Bisa Memesan Minum. Sisa Uang Anda Rp. " + harga);
    } else {
        console.log("Uang tidak cukup. Anda harus pulang.");
    }
}