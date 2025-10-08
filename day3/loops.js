// loops means repeating a block of code multiple times until a certain condition is met

for (let i = 0; i < 5; i += 2) {
    console.log("Loading... " + i);
}

let x=0;

while(x <= 10){
    console.log("while... " + x);
    x +=2;
}

x=0

do{
    console.log("do..." + x);
    x +=2;
}while(x <= 10);

let arrayOfNum = [5,7,2,9,1,4,3,6,8,0];

for(let i=0; i < arrayOfNum.length; i++){
    console.log("Array element at index " + i + " is " + arrayOfNum[i]);
}

for(let index in arrayOfNum){
    console.log("Array >> " + index + " is " + arrayOfNum[index]);
}

arrayOfNum.forEach(function(value, index,array){
    console.log(value);
});

arrayOfNum.forEach((value, index,array) => console.log("~" + value));