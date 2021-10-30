//while loop//
const colors = ["blue","red","green","orange"];
let i = 0;
 while (i <= 3) {
     console.log(i);
    i++;
 }
 console.log(colors);

//for loop
const colors = ["blue", "red", "green", "orange"];
for(var i=0; i<= colors.length; i++){
    console.log(colors[i]);
}

//forEach

const colors = ["blue", "red", "green", "orange"];
function iterate(colors){
    console.log(colors);
}
colors.forEach(iterate);

//1. 7 (while loop) en 3 (for loop)
//2. 5 regels for forEach.colors
//3. ik vind forEach meer leesbaarder dan de andere 

var colors = { 
    a: blue,
    b: red ,
    c: green,
    d:orange,
    e:yellow 
    };

console.log(Object.getOwnPropertyNames(colors));