function mult3or5(value: number): boolean {
  return value % 3 == 0 || value % 5 == 0
}

let sum: number = 0
for (let i: number = 0; i < 1000; i++) {
  if (mult3or5(i)) {
    sum += i
  }
}

console.log(`The sum of all the mutiple of 3 or 5 below 1000 is ${sum}`)

//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
const upperBound: number = 4e6

let prev: number = 0
let curr: number = 1
let next: number

let total: number = 0

while (curr < upperBound) {
  next = prev + curr
  prev = curr
  curr = next

  if (curr % 2 == 0) {
    total += curr
  }
}

console.log(
  `The sum of even-valued fibonacci terms under 4,000,000 is ${total}`
)

function largestPrimeFactor(n: number): number {
  let factor = 2
  while (n > factor) {
    if (n % factor === 0) {
      n = n / factor
    } else {
      factor++
    }
  }
  return factor
}

console.log(
  `The largest prime factor of the number 600851475143 is ${largestPrimeFactor(
    600851475143
  )}`
)
