let num=document.getElementById("num1").textContent=prompt("enter a number : ")
let num3=document.getElementById("num2").textContent=prompt("enter a number : ")


let sum1=document.getElementById("sum")
function add() {
  let result=num + num3
  sum1.textContent="sum: "+result
}
function subtract() {
  let result=num-num3
  sum1.textContent="sum: "+result
}
function division() {
  let result=num/num3
  sum1.textContent="sum: "+result
}
function multipy() {
  let result=num * num3
  sum1.textContent="sum: "+result
}
