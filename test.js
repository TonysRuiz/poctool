//read content of div
var list = document.getElementById("numbers").innerText;
//split it into an array of numbers
list = list.split(",");
//get the biggest element
var max = Math.max.apply(null, list);
//ta-daaaa
document.write("The max is: " + max);