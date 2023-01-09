var name1= "ching";
var name2= "Vang";
var name3 = name1.length-name2.length;
var arg;

if(name1.length>=name2.length){
    arg= "longer";
}else{
    arg= "shorter";
}
console.log("The name "+name1+ " is " + arg + " than "+name2+ " by "+ name3
    +" character(s)");
