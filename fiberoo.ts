function fib(): number[] {
  let a = 0;
  let b = 1;
  let c = 0;
  const result: number[] = [a, b];
  for (let i = 0; i < 48; i++) {
    c = a + b;
    a = b;
    b = c;
    result.push(c);
  }
  return result;
}

console.log(fib());

function numsToStrings(arr: number[]): string[] {
  let result: string[] = [];
  result = arr.map((num) => num.toString());
  return result;
}

console.log(numsToStrings(fib()));

function numEvenNums(arr: number[]): number {
  let counter: number = 0;
  arr.forEach((item) => {
    if (item % 2 === 0) {
      counter++;
    }
  });
  return counter;
}

console.log(numEvenNums(fib()));
