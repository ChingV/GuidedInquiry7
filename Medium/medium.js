const str1 = "I AM NOT YELLING"
const str2 = "i am yelling"
const str3 = "I Am using Camel Case"

var temp = prompt("Please enter a sentence");

console.log(temp);
switch(temp){
    case temp.toUpperCase():
        console.log("You are telling")
        break;
    case temp.toLowerCase():
        console.log("You are whispering")
        break;
    case temp:
        console.log("Talking regular");
        break;
}