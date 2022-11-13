const user = ["fatah", "hillah"];
// const users = new Array("Fatah", "Hillah");
// console.log(user, users);
// user.forEach((data, index) => console.log(`Index ke ${index} valuenya ${data}`));
// user.forEach(function(data, index) {
//     console.log(`Index ke ${index} valuenya ${data}`)
// });

// method map
// const email = user.map(function(data) {
//     return data.concat("@gmail.com");

// });

// const email = user.map((data) => {
//     return data.concat("@gmail.com");
// });

// console.log(email);

// method filter
const email = ["fatahillah@gmail.com", "hillah@look.co.id", "fatah@look.co.id"];

email.filter(function(data) {
    return data.split("@")[1] == "look.co.id"
}).forEach((data, index) => {
    console.log(`index ke ${index} emailnya ${data}`);
})

email.filter(data => data.split("@")[1] == "look.co.id")
    .forEach((data, index) => console.log(`index ke ${index} emailnya ${data}`));


//method push menambahkan data array
email.push("mahend@gmail.com");
email.unshift("hillah@look.co.id");
//spreed operator
const newEmail = [...email];
// console.log(email, newEmail);
email.pop();
email.shift();
email.splice(email.indexOf("hillah@look.co.id"), 1)
console.log(email);