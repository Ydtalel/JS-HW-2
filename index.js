// const amount = process.argv[2];
// console.time('JS Execution Time');
// const primeNumbers = findPrimeNums(amount);
// console.timeEnd('JS Execution Time');
// //console.log('Prime Numbers:', primeNumbers);

// function findPrimeNums(amount) {
//   let arr = [];
//   let primeNumber = 2;

//   while (arr.length < amount) {
//     let isPrime = true;

//     for (let i = 2; i < primeNumber; i++) {
//       if (primeNumber % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       arr.push(primeNumber);
//     }

//     primeNumber++;
//   }

//   return arr;
// }

const amount = process.argv[2];
console.time('JS Execution Time');
const primeNumbers = findPrimeNums(amount);
console.timeEnd('JS Execution Time');
// console.log('Prime Numbers:', primeNumbers);

function findPrimeNums(amount) {
  let primes = [];
  let num = 2;

  while (primes.length < amount) {
    let isPrime = true;

    for (let prime of primes) {
      if (num % prime === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(num);
    }

    num++;
  }

  return primes;
}
