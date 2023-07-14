function button(value) {
    document.getElementById("calculator").innerHTML += value;
  }

  function empty() {
    document.getElementById("calculator").innerHTML ="";
  }

  function calculate() {
    let expression = document.getElementById("calculator").innerHTML;
    let result = eval(expression);
    document.getElementById("calculator").innerHTML = result;
  }