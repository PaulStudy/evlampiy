let now = new Date();
let cost = 9550

// function random(min, max) {
//     let randomIndex = Math.random() * (max - min);
//     return Math.floor(randomIndex);
// }

function daysInMonth (month, year) {
return new Date(year, month, 0).getDate();
}

let year = Date() .split(' ') [3];
let today = new Date();
let num_month = today . getMonth() +1 ; 
let num_today = today . getDate()
let numdaysInMonth = daysInMonth(num_month , year)
let ostatok = numdaysInMonth-num_today
let ostatokToday = ostatok + 1

let summaPerDay = cost / numdaysInMonth
let summaToday = summaPerDay * ostatokToday + 450
let summaTomorrow = summaPerDay * ostatok + 450

function calcVal() {
  let selector = document.getElementById(`joke`)
  let selector2 = document.getElementById(`author`)
  selector.innerText = 'С сегодняшнего дня счет = ' + Math.ceil(summaToday / 100) * 100
  selector2.innerText = cost + 'р / ' + numdaysInMonth + ' дней, * ' + ostatokToday + ' дней, + 450р = ' + summaToday.toFixed(2) + ' р., в день = ' + summaPerDay.toFixed(2)
}

function calcVal2() {
  let selector = document.getElementById(`joke`)
  let selector2 = document.getElementById(`author`)
  if (ostatok > 0) {
    selector.innerText = 'С завтрашнего дня счет = ' + Math.ceil(summaTomorrow / 100) * 100
    selector2.innerText = cost + 'р / ' + numdaysInMonth + ' дней, * ' + ostatok + ' дней, + 450р = ' + summaTomorrow.toFixed(2) + ' р., в день = ' + summaPerDay.toFixed(2)
  } else {
    selector.innerText = 'С завтрашнего дня счет = 10000'
    selector2.innerText = 'Завтра начинается новый месяц, счет 10000р.'
  }
}
