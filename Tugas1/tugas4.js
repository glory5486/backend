let rows4 = 5;
let hasil = "";
for (let index = 1; index <= rows4; index++) {
    for (let i = rows4; i >= index; i--) {
        hasil += "* ";
    }
    hasil += "\n";
}
console.log(hasil);