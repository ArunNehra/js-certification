// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache = {}
    return function(...args) {
        //have we called this function with this particular
        // set of args before? If so, return that.
        if (cache[args]) {
            return cache[args]
        }
        const result = fn.apply(this, args)
        cache[args] = result
        return result
    }
}
  
function fib(n) {
    //linear time solution
    return n < 3 ? 1 : fib(n-1) + fib(n-2);
}

fib = memoize(fib)
  
  
module.exports = fib;