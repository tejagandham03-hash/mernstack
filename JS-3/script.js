let a=29;
let b=35;
let max;
max=(a>b)?a:b;
console.log(max);


let x="orange"
switch(x){
    case "banana":
    console.log("this is a banana");
    break;
        case "apple":
    console.log("this is a apple");
    break;
    default:
        console.log("i dont want apple");
}
for(let i=8;i<=100;i+=8){
    console.log(i);
}
function nice(name){
console.log("heyyy " +name+ " you are nice1");
console.log("heyyy " +name+ " you are nice2");
console.log("heyyy " +name+ " you are nice3");
console.log("heyyy " +name+ " you are nice4");
}
nice("nani");

function sum(a,b) {
    console.log(a+b);
    }
    total=sum(5,6)
    console.log(total);
function sum(a,b,c=3) {
    console.log(a+b+c);
    }
    sum(1,2,3)



    const func1 = (x)=>{
        console.log("i am an arrow function",x)
    }
func1()