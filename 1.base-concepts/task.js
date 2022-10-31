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



