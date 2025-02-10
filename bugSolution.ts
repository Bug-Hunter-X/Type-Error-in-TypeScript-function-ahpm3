function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}

let result = add(10, 20); // This will now give the correct result
console.log(result); // Output: 30

let result2 = add("hello", "world"); // This will now throw an error at runtime
console.log(result2); 