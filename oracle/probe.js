function newArrayWithRange(first, last) {
  let i;
  const array = [];
  for (i = first; i <= last; i += 1) {
    array.push(i);
  }
  return array;
}

function indivisibleBy(value) {
  return value % this !== 0;
}

function sieve(n) {
  if (n <= 1) {
    return [];
  }
  let prime;
  let possibilities;
  const primes = [];

  possibilities = newArrayWithRange(2, n);

  do {
    prime = possibilities.shift();
    primes.push(prime);
    possibilities = possibilities.filter(indivisibleBy, prime);
  } while (possibilities.length > 0);

  return primes;
}

const primes = (n) => sieve(n);

const __in = [1, 2, 10, 13, 1000];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: primes(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
