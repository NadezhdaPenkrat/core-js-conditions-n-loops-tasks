/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let result = 0;

  if (a > b && a > c) result = a;
  else if (b > a && b > c) result = b;
  else result = c;

  return result;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (!a || !b || !c) {
    return false;
  }
  if (
    (a === b && a + b > c) ||
    (a === c && a + c > b) ||
    (b === c && c + b > a)
  ) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let numRoman = '';
  function convertToRomanNum(n) {
    if (n < 4) {
      for (let i = 0; i < n; i += 1) {
        numRoman += 'I';
      }
    }
    if (n === 4) {
      numRoman += 'IV';
    }
    if (n > 4 && n < 9) {
      numRoman += 'V';
      for (let i = 5; i < n; i += 1) {
        numRoman += 'I';
      }
    }
    if (n === 9) {
      numRoman += 'IX';
    }
  }
  if (num > 9) {
    numRoman = 'X';
    for (let i = 1; i < Math.floor(num / 10); i += 1) {
      numRoman += 'X';
    }
    convertToRomanNum(num % 10);
  } else {
    convertToRomanNum(num);
  }
  return numRoman;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const symbol = numberStr[i];
    if (symbol === '-') {
      result += 'minus';
    }
    if (symbol === '.' || symbol === ',') {
      result += 'point';
    }
    switch (symbol) {
      case '9':
        result += 'nine';
        break;
      case '8':
        result += 'eight';
        break;
      case '7':
        result += 'seven';
        break;
      case '6':
        result += 'six';
        break;
      case '5':
        result += 'five';
        break;
      case '4':
        result += 'four';
        break;
      case '3':
        result += 'three';
        break;
      case '2':
        result += 'two';
        break;
      case '1':
        result += 'one';
        break;
      case '0':
        result += 'zero';
        break;
      default:
        break;
    }
    if (i !== numberStr.length - 1) {
      result += ' ';
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverseStr += str[i];
  }
  return reverseStr === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const toString = '';
  const numString = num + toString;
  const digitString = digit + toString;
  for (let i = 0; i <= numString.length; i += 1) {
    if (numString[i] === digitString) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) return -1;
  for (let mid = 1; mid < arr.length; mid += 1) {
    let sumLeft = 0;
    let sumRight = 0;
    for (let i = 0; i < mid - 1; i += 1) {
      sumLeft += arr[i];
    }
    for (let i = mid; i < arr.length; i += 1) {
      sumRight += arr[i];
    }
    if (sumLeft === sumRight) return mid - 1;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const spiralArr = [];
  for (let i = 0; i < size; i += 1) {
    spiralArr[i] = [];
    for (let j = 0; j < size; j += 1) {
      spiralArr[i][j] = 0;
    }
  }
  let counter = 1;
  let start = 0;
  let end = size - 1;
  while (counter <= size * size) {
    for (let i = start; i <= end; i += 1) {
      spiralArr[start][i] = counter;
      counter += 1;
    }
    for (let i = start + 1; i <= end; i += 1) {
      spiralArr[i][end] = counter;
      counter += 1;
    }
    for (let i = end - 1; i >= start; i -= 1) {
      spiralArr[end][i] = counter;
      counter += 1;
    }
    for (let i = end - 1; i >= start + 1; i -= 1) {
      spiralArr[i][start] = counter;
      counter += 1;
    }
    start += 1;
    end -= 1;
  }
  return spiralArr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const copy = [];
  for (let i = 0; i < matrix.length; i += 1) {
    copy[i] = [];
    for (let j = 0; j < matrix[0].length; j += 1) {
      copy[i][j] = matrix[i][j];
    }
  }

  const shallowCopy = matrix;
  for (let i = 0; i < copy.length; i += 1) {
    for (let j = 0; j < copy[0].length; j += 1) {
      shallowCopy[i][j] = copy[copy.length - j - 1][i];
    }
  }
  return shallowCopy;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sortArr = arr;
  const sortFunction = (arr2, leftItem = 0, rightItem = arr2.length - 1) => {
    if (leftItem >= rightItem) return;

    const middleItem = arr2[Math.floor((leftItem + rightItem) / 2)];

    let i = leftItem;
    let j = rightItem;

    while (i <= j) {
      while (arr2[i] < middleItem) i += 1;
      while (arr2[j] > middleItem) j -= 1;

      if (i <= j) {
        [sortArr[i], sortArr[j]] = [arr2[j], arr2[i]];
        i += 1;
        j -= 1;
      }
    }

    if (leftItem < j) sortFunction(arr2, leftItem, j);
    if (i < rightItem) sortFunction(arr2, i, rightItem);
  };

  sortFunction(sortArr);

  return sortArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let curRes = str;
  const res = [curRes];
  for (let i = 1; i <= iterations; i += 1) {
    let left = '';
    let right = '';
    for (let j = 0; j < curRes.length; j += 1) {
      if (j % 2 === 0) {
        left += curRes[j];
      } else {
        right += curRes[j];
      }
    }
    curRes = left + right;
    if (curRes === str) {
      return res[iterations % res.length];
    }
    res[i] = curRes;
  }
  return curRes;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = [];
  let curNumber = number;
  while (curNumber > 0) {
    const last = curNumber % 10;
    arr.push(last);
    curNumber = Math.floor(curNumber / 10);
  }

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < arr[i - 1]) {
      let minIndex = i - 1;
      let min = arr[i - 1];
      for (let j = 0; j < i; j += 1) {
        if (arr[j] > arr[i] && arr[j] < min) {
          min = arr[j];
          minIndex = j;
        }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      for (let k = 0; k < i - 1; k += 1) {
        for (let l = 0; l < i - k - 1; l += 1) {
          if (arr[l] < arr[l + 1]) {
            [arr[l], arr[l + 1]] = [arr[l + 1], arr[l]];
          }
        }
      }
      break;
    }
  }

  let res = 0;
  for (let i = 0; i < arr.length; i += 1) {
    res += 10 ** i * arr[i];
  }
  return res;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
