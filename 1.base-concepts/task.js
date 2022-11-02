"use strict"
  // Задача №1
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d > 0) {
    console.log(`Дискриминант ${d} > 0, 2 корня`);
    let x1 = (-b + Math.sqrt(d))/(2*a);
    let x2 = (-b - Math.sqrt(d))/(2*a);
    arr.push(x1, x2);
  } else if (d == 0) {
    console.log(`Дискриминант ${d} = 0, 1 корень`);
      let x1 = -b/(2*a);
      arr.push(x1);
  }      else if (d < 0) {
        console.log(`Дискриминант ${d} < 0, корней нет`);
  }
   console.log(arr);
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
   let totalAmount;
    if (isNaN(percent)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }   
  let returnAmount = amount - contribution; 
  let date1 = new Date(); 
  let diff = Date.parse(date) - Date.parse(date1);
  let creditTerm = Math.ceil(diff / 1000 / 60 / 60 / 24 / 30.5);  
  let P = percent / 12 / 100;
  let monthlyPayment = returnAmount * (P + (P / (((1 + P) ** creditTerm) - 1)));
      totalAmount = creditTerm * monthlyPayment;        
    return Number(totalAmount.toFixed(2));  
}

