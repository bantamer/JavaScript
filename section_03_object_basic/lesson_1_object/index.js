const isEmpty = obj => {
  for (let key in obj) {
    return false;
  }
  return true;
};

// console.log(isEmpty({}));
// console.log(isEmpty({ abc: "abc" }));

const sumOfSalaries = salaries => {
  let sum = 0;
  for (let name in salaries) {
    sum = sum + salaries[name];
  }
  return sum;
};

// console.log(sumOfSalaries({ John: 100, Ann: 160, Pete: 130 }));
// console.log(sumOfSalaries({}));

const multiplyNumeric = obj => {
  for (let key in obj) {
    typeof obj[key] === "number" ? (obj[key] = obj[key] * 2) : false;
  }
  return obj;
};

// console.log(
//   multiplyNumeric({
//     width: 200,
//     height: 300,
//     title: "My menu",
//   })
// );
