// 5 kyu on CodeWars

//Solution:

function one    (calculate) { return calculate ? calculate(1) : 1 }
function two    (calculate) { return calculate ? calculate(2) : 2 }
function three  (calculate) { return calculate ? calculate(3) : 3 }
function four   (calculate) { return calculate ? calculate(4) : 4 }
function five   (calculate) { return calculate ? calculate(5) : 5 }
function six    (calculate) { return calculate ? calculate(6) : 6 }
function seven  (calculate) { return calculate ? calculate(7) : 7 }
function eight  (calculate) { return calculate ? calculate(8) : 8 }
function nine   (calculate) { return calculate ? calculate(9) : 9 }
function zero   (calculate) { return calculate ? calculate(0) : 0 }

function plus(y)  { return function (x) { return x + y} }
function minus(y) { return function (x) { return x - y} }
function times(y) { return function (x) { return x * y} }
function dividedBy(y) { return function (x) {
    return y === 0 ? 'division by zero' : Math.floor(x / y)
  }
}
