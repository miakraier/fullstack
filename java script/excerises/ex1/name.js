/*let name=prompt ("what is your name?");
console.log (name);
document.write ("your name is " + name);
let age = prompt("write your age:");
let country = prompt("where are you from?")
let trueVal ="true" 
let driver = trueVal == prompt("are you driving today?")
console.log(age);
if (driver) {
    if (age > 21) {
        document.writeln("you can drink")
    }
    else if (age > 18 && country == "uk" || country == "il") {
        document.writeln("you can drink")
    }
    else { document.writeln("maybe in a few years") }
}
else {document.write ("you can't drink and drive") }*/

/*for (let i=0; i<=100; i++) {
    console.log (i)
    document.write(i+'<br>')
    }*/
let x = parseInt(prompt("enter number:"))
let sum = 0
while (x != -99) {
    sum = sum + x
    document.write(x + '<br>');
    x = parseInt(prompt("enter number:"))
    //x=parseInt( Math.random()*100)
}
console.log(sum);




