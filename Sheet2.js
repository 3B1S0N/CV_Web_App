const first = localStorage.getItem("F");
const middle = localStorage.getItem("M");
const Last = localStorage.getItem("L");
const Email = localStorage.getItem("E");
const Number = localStorage.getItem("N");
const address = localStorage.getItem("A");

document.getElementById("name").innerHTML = first + " " + middle + " " + Last
document.getElementById("address").innerHTML = address
document.getElementById("Number").innerHTML = Number
document.getElementById("email").innerHTML = Email


