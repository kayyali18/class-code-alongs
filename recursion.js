function countdown (x) {
    if (x < 0) return x; //base case
    console.log (x)
    x = countdown (x - 1);
    return x;
}

function factorial (x) {
    if (x <= 1) return x;
    return (x * factorial(x - 1))

}


function sum (arr) {
    if (arr.length == 1) return arr[0];
    let total = arr[0];
    arr.shift ();
    return (total += sum(arr))
}

function reverse (arr) {
    if (arr.length == 1 ) return arr[0];
    let reversedArr = arr.pop();
    return reversedArr + reverse (arr)
}

function reverseString (str) {
    if (str.length == 0) return '';
    let reversedStr = str.slice(-1)
    str = str.slice(0, -1)
    return reversedStr + reverseString (str);
}


function collatz (n) {
    if (n == 1) return 0;
    else if (n % 2 == 0) {
        n *= 0.5;
        return 1 + collatz (n);
    } else {
        n = n * 3 + 1;
        return 1 + collatz (n)
    }
}

console.log ('\nThis is the countdown function:\n ')
countdown (5)
console.log ('\nThis is the factorial function:\n', factorial (5))
console.log ('\nThis is the sum function:\n', sum ([1, 2, 3, 4, 5]))
console.log ('\nThis is the reverse ARRAY function:\n', reverse (['h', 'e', 'l', 'l', 'o']))
console.log ('\nThis is the reverse STRING function: \n', reverseString('hello'))

console.log ('\nThis is collatz: \n', collatz (3))
