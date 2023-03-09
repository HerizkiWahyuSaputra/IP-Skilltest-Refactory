function multi(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += 1;
    }
  }
  return sum;
}

const result1 = multi(10);
console.log(result1);

const result2 = multi(20);
console.log(result2);
