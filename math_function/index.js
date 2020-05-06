console.log(Math.PI);
console.log(Math.pow(4,2));
function circleArea(r){
    return Math.PI*Math.pow(r,2);
}
console.log(circleArea(4));
var maxNum=Math.max(3,4,5,7,9,4,3);
console.log(maxNum);
var myArray=[3,4,5,7,9,4,3];
console.log(Math.max.apply(null,myArray));