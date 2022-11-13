let rows3 = 5;
let hasil = "";
for (let index = 1; index <= rows3; index++) {
    for (let i = 1; i <= index; i++) {
        hasil += "* ";
    }
    hasil += "\n";
}
console.log(hasil);