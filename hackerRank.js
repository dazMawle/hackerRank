
// Given an array of integers, calculate the ratios of its elements that are 
// positive, negative, and zero. Print the decimal value of each fraction on
// a new line with 6 places after the decimal.

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

// Given five positive integers, find the minimum and maximum values that can
// be calculated by summing exactly four of the five integers. Then print the
// respective minimum and maximum values as a single line of two space-separated long integers.

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
// from the back of the book. They always turn pages one at a time...


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

// console.log(towerBreakers(2, 4));

// *********************************************************
// *********************************************************

// Julius Caesar protected his confidential information by encrypting it
// using a cipher. Caesar's cipher shifts each letter by a number of letters.
// If the shift takes you past the end of the alphabet, just rotate back to the
// front of the alphabet. In the case of a rotation by 3, w, x, y and z would map 
// to z, a, b and c.

const caesarCipher = (s, k) => {
    const lowerC = "abcdefghijklmnopqrstuvwxyz";
    const upperC = lowerC.toUpperCase();
    const newStr = s.split("").map(cc => {
        if(lowerC.includes(cc)){
            return lowerC[(lowerC.indexOf(cc) + k) % 26];
        }else if (upperC.includes(cc)){
            return upperC[(upperC.indexOf(cc) + k) % 26];
        }else{
            return cc;
        }
    });
    return newStr.join("");
}

// console.log(caesarCipher('Ab-c', 27));

// *********************************************************
// *********************************************************

// You will be given a list of integers, arr, and a single integer k.
// You must create an array of length k from elements of such that 
// its unfairness is minimized...

const maxMin = (k, arr) => {
    arr.sort((a,b) => {return a-b});
    let mD = Number.MAX_VALUE;
    for(i = 0; i < arr.length - k + 1; i++){
        let d = arr[i + k -1] - arr[i];
        mD = Math.min(d, mD);
    }
    return mD;
}

// const maxArr = [1,200,3,40,10,20,30,4,100,2];
// console.log(maxMin(4, maxArr));


// *********************************************************
// *********************************************************

// Declare a 2-dimensional array, arr , of n empty arrays. All arrays are zero indexed.
// Declare an integer, lastAnswer , and initialize it to 0.
// There are 2 types of queries, given as an array of strings for you to parse...

const dynamicArray = (n, queries) => {
    let lastAnswer = 0;
    let answersArray = [];
    const arr = [];
    for(let i = 0; i < n; i++){
        arr[i] = new Array();
    }
    for(let i = 0; i < queries.length; i++){
        var idx = ((queries[i][1] ^ lastAnswer) % n);
        if(queries[i][0] == 1){
            arr[idx].push(queries[i][2]);
        }else{
            lastAnswer = arr[idx][queries[i][2] % arr[idx].length];
            answersArray.push(lastAnswer);
        }
    }
    return answersArray;
}
//xOR = ^
// console.log(dynamicArray(2, [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ]));

// *********************************************************
// *********************************************************

// Given a square grid of characters in the range ascii[a-z], 
// rearrange elements of each row alphabetically, ascending. 
// Determine if the columns are also in ascending alphabetical order,
// top to bottom. Return YES if they are or NO if they are not.

const gridChallenge = (grid) => {

    let sortedArr = [];
    for(let i = 0; i < grid.length; i++){
        var element = grid[i].split('').sort();
        sortedArr.push(element);
    }
    let columnLen = sortedArr[0].length;
    for(let i = 0; i < sortedArr.length -1; i++){
        for(let j = 0; j < columnLen; j++){
            if(sortedArr[i][j] > sortedArr[i+1][j]){
                return 'NO';
            }    
        }
    }
    return 'YES';
}

// console.log(gridChallenge(['abcd','mpxz','wlmf']));


// *********************************************************
// *********************************************************

// Watson gives Sherlock an array of integers. His challenge is to find an element
// of the array such that the sum of all elements to the left is equal to the sum 
// of all elements to the right.

const balancedSums = (arr) => {
    if(arr.length == 1){return 'YES'};
    let startCount = 0;
    let endCount = 0;
    for(i = 0; i < arr.length; i++){endCount += arr[i]}
    for(i = 0; i < arr.length; i++){
        endCount -= arr[i];
        if(startCount == endCount){
            return 'YES';
        }
        startCount += arr[i];
    }
    return 'NO';
}

// console.log(balancedSums([7,3,6,8,2,5,3,6]))


// *********************************************************
// *********************************************************

// We define super digit of an integer x using the following rules:
// Given an integer, we need to find the super digit of the integer.
// If x has only 1 digit, then its super digit is x.
// Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
// Complete the function superDigit in the editor below. It must return the calculated super digit as an integer.

const superDigit = (n, k) => {
    if(Number(n) < 10){return Number(n)};
    let total = 0;
    n.split('').forEach((e)=>{total += Number(e)})
    let stringTotal = (total * k).toString();
    return superDigit(stringTotal, 1);
}

// console.log(superDigit('9875', 4));


// *********************************************************
// *********************************************************

// Louise and Richard have developed a numbers game. They pick a number and check
// to see if it is a power of 2. If it is, they divide it by 2. If not, they reduce
// it by the next lower number which is a power of 2. Whoever reduces the number to  
// 1 wins the game. Louise always starts. Given an initial value, determine who wins the game.

const counterGame = (n) => {
    if (n === 1) return 'Richard';
    let count = 0;
    while (n > 1) {
      const log2 = Math.log2(n);
      if (Number.isInteger(log2)) {
        count += log2;
        break;   
      } else {
        count++;
        n -= Math.pow(2, Math.floor(log2));
      }
    }
    return count % 2 === 1 ? 'Louise' : 'Richard';
}

// console.log(counterGame(64));

// *********************************************************
// *********************************************************

// Given an integer n, find each x such that: n + x = n ^ x
// where ^ denotes the bitwise XOR operator. Return the number of x's satisfying the criteria.

const sumXor = (num) => {
    if(num === 0){return 1};
    let binary = (num).toString(2);
    let zeroCount = 0;
    binary.split('').forEach((bit) =>{
        if(bit === '0')(zeroCount++);
    });
    return 2 ** zeroCount;
}

// console.log(sumXor(1099511627776));

// *********************************************************
// *********************************************************

// As long as you error check first, you can take advantage of the fact that
// elements/people will never move more than two spaces left / forwards.
// Use this to count/sort from the end.

const minimumBribes = (q) => {
   
    let count = 0;

    for(let i = 0; i < q.length; i++){
        var jumps = q[i] - (i+1); 
        if(jumps > 2){
            console.log('Too chaotic');
            return;
        }else if(i+1 < q[i]){
            count+= jumps;
        }else{
            for(let j = i+1; j < q.length; j++){
                if(q[i] > q[j]){
                    count++;
                }
            }
        }
    }
    console.log(count);
}
const q = [1,2,5,3,7,8,6,4];

// console.log(minimumBribes(q));


// *********************************************************
// *********************************************************

// Sherlock considers a string to be valid if all characters of the string appear
// the same number of times. It is also valid if he can remove just 1 character at 1
// index in the string, and the remaining characters will occur the same number of times. 
// Given a string , determine if it is valid. If so, return YES, otherwise return NO.


const isValid = (string) => {
    let object = {};
    let avCount = 0;

    for(let i = 0; i < string.length; i++){
        if(object[string[i]]){
            object[string[i]]++;
            avCount++
        }else{
            object[string[i]] = 1;
            avCount++
        }
    }    
    
    let values = Object.values(object);
    let average = Math.round(avCount / values.length);
    let diffCount = 0;

    for(let i = 0; i < values.length; i++){
        if(Math.abs(values[i] - values[i - 1]) > average){
            diffCount += (values[i] - average);
        }else{
            diffCount += Math.abs(values[i] - average);
        }
    }
    if(diffCount > 1)return 'NO';
    return 'YES';
}


let string = 'abbccc';

// console.log(isValid(string));

