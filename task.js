function myFunction() {
  let text1;
  var num = parseInt(document.getElementById("num").value);
 if (num < 0) {
    text1 = "Please enter positive number";
  } else if (num % 2 == 0) {
    var num1 = num + 2;
    var num2 = num1 + 2;
    var num3 = num2 + 2;
    text1 = `${num1}, ${num2}, ${num3}`;
  } else if (num % 2 !== 0) {
    var num4 = num + 2;
    var num5 = num4 + 2;
    var num6 = num5 + 2;
    text1 = `${num4}, ${num5}, ${num6}`;
  }
 
  document.getElementById("demo1").innerHTML = text1;
}
