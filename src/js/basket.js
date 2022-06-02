let calculate = document.getElementById("shopping-sum");
let count = document.getElementById("shopping-number");
sum = document.getElementById("calculation").innerHTML;

document.getElementById("new-sum").onclick = function() {
  let countPlus = count.innerHTML;
  if(+countPlus <= 3){
    count.innerHTML++;
    let countPlus = count.innerHTML;
    calculate.innerHTML = calculations(countPlus) ;
  }
}