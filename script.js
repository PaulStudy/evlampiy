var now = new Date();

function random(min, max) {
    let randomIndex = Math.random() * (max - min);
    return Math.floor(randomIndex);
}

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

let summaPerDay = 9550 / numdaysInMonth
let summaToday = summaPerDay * ostatokToday + 450
let summaTomorrow = summaPerDay * ostatok + 450

function pogovorkaFM() {
     let selector = document.getElementById(`joke`)
     let selector2 = document.getElementById(`author`)
     selector.innerText = 'С сегодняшнего дня счет = ' + Math.ceil(summaToday)
     selector2.innerText = ' 9550 делим на ' + numdaysInMonth + ', умножаем на оставшиеся ' + ostatokToday + ' дней и прибавляем 450'
}

function pogovorkaFM2() {
    let selector = document.getElementById(`joke`)
    let selector2 = document.getElementById(`author`)
    selector.innerText = 'С завтрашнего дня счет = ' + Math.ceil(summaTomorrow)
    selector2.innerText = ' 9550 делим на ' + numdaysInMonth + ', умножаем на оставшиеся с завтрашнего дня ' + ostatok + ' дней и прибавляем 450'
}
