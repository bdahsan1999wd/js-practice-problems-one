var a = isNaN('11');
console.log(a);

/*  Explanation:

The isNaN() function checks whether the value is Not a Number.

'11' is a string, but it contains a numeric value.

JavaScript tries to convert '11' into a number.

'11' ===> 11 (a valid number).

Since 11 is a number, isNaN(11) ===> false.
*/

// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------

var a = isNaN(2 - 10);
console.log(a);

/*  Explanation:

2 - 10 is a numeric expression.

2 - 10 = -8 (a valid number).

isNaN(-8) checks if -8 is Not a Number.

-8 is a number, so isNaN(-8) ===> false.
*/