
// 1. Remove all spaces in a string --------------------------------------------
function removeSpaces(str) {
  let strIntoArray = str.split("").filter(n => n !== ' ');
  str = strIntoArray.join('');
  return str;
}

removeSpaces(" a bc  def  ");


// 2. Convert underscore naming convention into camel --------------------------
function snakeToCamel(snakeCase){
  snakeCase = snakeCase.replace(/_./g, function(s) {
    return s[1].toUpperCase();
  });
  return snakeCase;
};

snakeToCamel("local_host_time");


// 3. Convert numbers to currency ----------------------------------------------
function convert(amount) {
  amount = amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return amount;
}

convert(0);      // "$0.00"
convert(100);    // "$100.00"
convert(3.268);  // "$3.26"
convert(-16);    // "-$16.00"


// 4. Count and say ------------------------------------------------------------
function countAndSay(str) {
  let result = [];
  let count = 1;
  const strIntoArray = str.split("");
  for(let w = 0; w < strIntoArray.length; w++){
    if (strIntoArray[w] === strIntoArray[w+1]) {
      count += 1;
    } else {
      result.push(count, strIntoArray[w]);
      count = 1;
    }
  }
  result = result.join('');
  return result;
}

function decode(str) {
  let result = [];
  const array = str.split("");
  for(let w = 0; w < array.length; w += 2 ){
    if (isNaN(array[w+1]) === false) {
      number = [];
      number.push(array[w], array[w+1]);
      number = number.join('');
      let letters = (array[w+2]).repeat(number);
      result.push(letters);
      w += 1;
    } else {
      let letters = (array[w+1]).repeat(array[w]);
      result.push(letters);
    }
  }
  result = result.join('');
  return result;
}

console.log(countAndSay("aaabbcddddaa"))       // "3a2b1c4d2a"
console.log(countAndSay("oooooooooooxxoo"))    // "11o2x2o"
console.log(decode("3a2b1c4d2a"))              // "aaabbcddddaa"
console.log(decode("11o2x2o"))                 // "oooooooooooxxoo"


// 5. Merge objects by key -----------------------------------------------------
const obj1 = {
  foo: [1, 2],
  bar: [3],
  baz: [4]
};

const obj2 = {
  foo: [5],
  baz: [6, 7],
  bam: [8]
};

let keysOfObj2 = Object.keys(obj2);

for(let w = 0; w < keysOfObj2.length; w++){
  if (obj1[keysOfObj2[w]]) {
    obj1[keysOfObj2[w]].push(obj2[keysOfObj2[w]]);
    obj1[keysOfObj2[w]] = obj1[keysOfObj2[w]].flat();
  } else {
    obj1[keysOfObj2[w]] = obj2[keysOfObj2[w]];
  }
}
console.log(obj1);


// 6. Curry function -----------------------------------------------------------
function add() {
  var total = 0;

  function sum(){
    if( arguments.length ){
      var arr = Array.prototype.slice.call(arguments).sort();
      total = total + arrayAdder(arr);
      return sum;
    } else {
      return total;
    }
  }

  if(arguments.length) {
    var arr1 = Array.prototype.slice.call(arguments).sort();
    var mytotal = arrayAdder(arr1);
    return sum(mytotal);
  } else {
    return sum();
  }

  function arrayAdder(arr){
    var x = 0;
    for (var i = 0; i < arr.length; i++) {
      x = x + arr[i];
    };
    return x;
  }
}
add(1)() // 1
add(1)(2)() // 3
add(1, 2)() // 3
add(1)(2, 3)(4)() // 10
// notice this can be chained as many times as possible
add(1)(2)(3, 4)(5, 6, 7)(8)(9, 10)() // 55
add(2,3)(1)(1)(1,2,3)();
