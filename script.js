var number = prompt("which tables do you want to see")

for(let i = 1; i < number; i++){
   for(let j = 1; j <= 10; j++) {
    var table = j * i
    document.write(i + " * " + j + " = " + table + "<br/>");
   }
}

for(let i = 1; i<=10; i++){
    var table= i * number
    document.write(number + " * " + i + " = " + table + "<br/>");
}