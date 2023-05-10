//javascript functions implementation

let num=[66,34,22,45,66,78,98,46,55,43]
console.log("enter numbers"," ",num);

//display numbers greater than 45 and even numbers
let greaterNum=num.filter(elm=>{
  return elm>45&&elm%2==0
})
console.log("number greater than 45 and even are"," ",greaterNum);
//display all numbers by adding 5 
let add=num.map(elm=>{
  return elm+5
})
console.log("numbers by adding 5"," ",add);

//enter 5 subject marks and calculate total marks
let m=[45,66,89,99,88]
console.log("All subject marks are",m)
let totalMark=m.reduce((elm,total)=>{
  return elm+total
},0)
console.log("total marks",totalMark);



