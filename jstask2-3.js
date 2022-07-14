function baitap1() {
  var salaryOfDay = document.getElementById("salary").value * 1;
  var dayWork = document.getElementById("day").value * 1;
  var total = salaryOfDay * dayWork;
  document.getElementById("resultBt1").innerHTML = total;
}
/************************************************************/
function baitap2() {
  var num1 = document.getElementById("n1").value * 1;
  var num2 = document.getElementById("n2").value * 1;
  var num3 = document.getElementById("n3").value * 1;
  var num4 = document.getElementById("n4").value * 1;
  var num5 = document.getElementById("n5").value * 1;
  var average = (num1 + num2 + num3 + num4 + num5) / 5;
  document.getElementById("resultBt2").innerHTML = average;
}
/************************************************************/
function baitap3() {
  var priceUSD = document.getElementById("moneyTranfer").value * 1;
  var transferVND = priceUSD * 23500;
  document.getElementById("resultBt3").innerHTML = transferVND;
}
/************************************************************/
function baitap4() {
  var length = document.getElementById("leng").value * 1;
  var width = document.getElementById("width").value * 1;
  var area = width * length;
  var perimeter = (width + length) * 2;
  document.getElementById("resultBt4-area").innerHTML = area;
  document.getElementById("resultBt4-perimeter").innerHTML = perimeter;
}
/************************************************************/
function baitap5() {
  var n2Number = document.getElementById("txtNum").value * 1;
  var num1 = n2Number % 10;
  var num2 = Math.floor(n2Number / 10);
  var totalOf2Number = num1 + num2;
  document.getElementById("resultBt5").innerHTML = totalOf2Number;
}

