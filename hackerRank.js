const { forEach } = require("lodash");
const { start } = require("repl");


function plusMinus(arr) {
    var resArr = [0,0,0];
    arr.forEach(element => {
        if(element > 0){resArr[0]++};
        if(element < 0){resArr[1]++};
        if(element == 0){resArr[2]++};
    });
    resArr.forEach(number => {
        console.log((number / arr.length).toFixed(6));
    });
}

// plusMinus([1,-2,3,4,5,-6,7,0,9]);

// *********************************************************
// *********************************************************

// const arr = [9,7,1,3,5];

function miniMaxSum(arr) {
    arr.sort((a,b) => {return a - b});
    var sum = 0;
    for(let i=0; i < arr.length; i++){
        sum += arr[i];
    }
    var min = sum - arr[arr.length-1];
    var max = sum - arr[0];
    console.log(`${min} ${max}`);
}

// console.log(miniMaxSum(arr));

// *********************************************************
// *********************************************************

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

const militaryTime = (s) => {
    var hours = parseInt(s.substring(0,2));
    var remainder = s.substring(2,8);
    if(s.includes('PM') && hours !== 12){hours += 12};
    if(s.includes('AM')){(hours === 12) ? hours = '00' : hours = '0' + hours };
    return `${hours}${remainder}`; 
}

// console.log(militaryTime('07:05:45AM'));

// *********************************************************
// *********************************************************

// There is a collection of input strings and a collection of query strings.
//  For each query string, determine how many times it occurs in the list of input strings. 
// Return an array of the results.

const matchingStrings = (strings, queries) => {
    var returnArr = [];
    for(let i = 0; i < queries.length; i++){
        var count = 0;
        for(let j = 0; j < strings.length; j++){
            if(queries[i] === strings[j]){count++;}
        }
        if(count != 0){returnArr.push(count)}else{returnArr.push(0)};
    }
   return returnArr;
}

var queries = ['a', 'c', 'b', 'z'];

var strings = ['a', 'a', 'z', 'c'];

// console.log(matchingStrings(strings, queries));


// *********************************************************
// *********************************************************

// Given an array of integers, where all elements but one occur twice,
// find the unique element.

const lonelyInteger = (a) => {
    a.sort()
    for(let i = 0; i < a.length; i++){
        if(a[i] !== a[i+1] && a[i] !== a[i-1]){return a[i];}
    };
}

// var testArr = [9,9,4,2,0,6,7,4,5,5,1,2,1,6,7];
// console.log(lonelyInteger(testArr));


// *********************************************************
// *********************************************************

// You will be given a list of 32 bit unsigned integers. 
// Flip all the bits (0 -> 1 and 1 -> 0) and return the result as an unsigned integer.

const flippingBits = (n) => {
    var numString = (n >>> 0).toString(2).padStart(32, '0');
    var numSplit = numString.split('');
    numSplit.forEach((element, index) => {
        if(element == 1){numSplit[index] = 0}else{numSplit[index] = 1};
    });
    var joinedString = numSplit.join('');
    return parseInt(joinedString, 2);
}

// console.log(flippingBits(1));


// *********************************************************
// *********************************************************

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const diagonalDifference = (arr) => {
    var d1 = 0;
    var d2 = 0; 
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i === j){
                d1 += arr[i][j];
            }
            if(i + j === arr.length -1){
                d2 += arr[i][j];
            }
        }
    }
    return Math.abs(d1 - d2);
}

// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [9, 8, 9]
//  ];

// console.log(diagonalDifference(arr));


// *********************************************************
// *********************************************************


// Given a list of integers, count and return the number of 
// times each value appears as an array of integers.

const countingSort = (arr) => {
    var auxArr = Array(100).fill(0);
    for(let i = 0; i < arr.length; i++){
        auxArr[arr[i]]++;
    }
    return auxArr;
}

const arr = [1,3,4,10,7,3,8,9,9,0];

// console.log(countingSort(arr));


// *********************************************************
// *********************************************************

// A pangram is a string that contains every letter of the alphabet. 
// Given a sentence determine whetherit is a pangram in the English alphabet.
// Ignore case. Return either pangram or not pangram as appropriate.

const readLine = (string) => {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const lCString = string.toLowerCase().split('');
    alphabet.forEach((element, index) =>{
        if(lCString.includes(element)){alphabet[index] = ''};
    });
    const joinedAplh = alphabet.join('');
    if(joinedAplh === ''){return 'pangram'};
    return 'not pangram';
}

// console.log(readLine('The quick brown fox jumps over the lazy dog'));


// *********************************************************
// *********************************************************

// There are two n-element arrays of integers, A and B. Permute them into some A' and B'
// such that the relation A'[i]+B'[i] >= k holds for all  where 0 <= i < n.
// There will be q queries consisting of A, B, and k. For each query, return YES 
// if some permutation A', B' satisfying the relation exists. Otherwise, return NO.

const twoArrays = (a, b, k) => {
    a.sort((a,b) =>{ return a - b});
    b.sort((a,b) =>{ return b - a});
    console.log(a, b) 

    for(let i = 0; i < a.length; i++){
        console.log(a[i], b[i])
        if(a[i] + b[i] < k){
            return 'NO';
        }
    }
    return 'YES';
}

const a = [1,2,2,1];
const b = [3,3,3,4];
const k = [5];

// console.log(twoArrays(a,b,k));

// *********************************************************
// *********************************************************

// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
// Lily decides to share a contiguous segment of the bar selected such that:
// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

const birthday = (s, d, m) => {
    var count = 0;    
    for(let i = 0; i < s.length; i++){
        const sliced = s.slice(i, i+m);
        var sumOfSliced = sliced.reduce((a,b)=>{return a+b});
        if(sumOfSliced === d){count++}
    }
    return count;
}

const s = [1,2,1,3,2];
const d = 3;
const m = 2;


// *********************************************************
// *********************************************************


// TEST 1

let array = [0,2,4,6,5,7];

const findMedian = (arr) => {
    var sortedArr = arr.sort((a,b)=>{return a - b});
    return sortedArr[Math.floor(sortedArr.length / 2)];
}

// console.log(findMedian(array));


const flippingMatrix = (matrix) => {

    let n = matrix.length / 2;
    let max = 0;
    let total = 0;
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            max = Number.MIN_VALUE;
            max = Math.max(matrix[i][j], max);
            max = Math.max(matrix[i][2 * n - j -1], max);
            max = Math.max(matrix[2 * n - i - 1][j], max);
            max = Math.max(matrix[2 * n - i - 1][2 * n - j - 1], max);
            total += max;
        }
    }
    return total;
}

const testMatrix = [[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]];

// console.log(flippingMatrix(testMatrix));


// *********************************************************
// *********************************************************


// There is a large pile of socks that must be paired by color. Given an array of 
// integers representing the color of each sock, determine how many pairs of socks
// with matching colors there are.

var arr2 = [6,5,2,3,5,2,2,1,1,5,1,3,3,3,5];


const sockMerchant = (ar) => {
    var paircount = 0
    var count = 0;
    var sorted = ar.sort()
    for(let i = 0; i < sorted.length;  i++){
        count++
        if(sorted[i] != sorted[i+1]){paircount += Math.floor(count / 2); count = 0;}
    }       
}

// console.log(sockMerchant(arr2));


// *********************************************************
// *********************************************************


// A teacher asks the class to open their books to a page number. 
// A student can either start turning pages from the front of the book or 
// from the back of the book. They always turn pages one at a time......


function drawingBook(n, p) {
    var start = Math.floor(p/2);
    var end = Math.floor((n/2) - start);
    return Math.min(start, end);
}

// console.log(drawingBook(6, 5));

// *********************************************************
// *********************************************************


// Two players are playing a game of Tower Breakers! Player always
// moves first, and both players always play optimally.The rules of 
// the game are as follows....

const towerBreakers = (n, m) => {
   if(m === 1){return 2};
   if(n % 2 !== 0){return 1}else{return 2};
}

console.log(towerBreakers(2, 4));



