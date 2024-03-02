console.log('--------EXERCISE 1----------');

function addPosition(array) {
    return array.map((number, index) =>{
        let addedNum = number + index + 1;
        while (addedNum > 9) {
            addedNum = addedNum % 10;
        }
        return addedNum;
    });
}

//----------------------EXAMPLE----------------------------

const inputArray = [4, 6, 9, 1, 3];
const result = addPosition(inputArray);
console.log(result);

console.log('--------EXERCISE 2----------');

function twoSmallest (array, size) {
    let i, first, second, sum;

    if (size < 2) {
        console.log('Invalid Input');
        return
    }

    first = Number.MAX_VALUE;
    second = Number.MAX_VALUE;

    for (i = 0; i < size; i ++) {
        if (array[i] < first) {
            second = first;
            first = array[i];
        } else if (array[i] < second && array[i] != first)
            second = array[i];
    }

    if (second == Number.MAX_VALUE)
        console.log("There is no second smallest element");
    else
        sum = first + second;
        console.log("The smallest elements are " + first + " and " + second + " their sum is: " + sum );
}

// --------------EXAMPLE-------------------

const res = twoSmallest(inputArray, inputArray.length)




console.log('--------EXERCISE 3----------');

let res1;
function calculator (num1, num2, operation) {

    switch (operation) {
        case '+' :
            res1 = num1 + num2;
            console.log(res1)
            break
        case '-' :
           res1 = num1 - num2;
            console.log(res1)
            break
        case '*':
            res1 = num1 * num2;
            console.log(res1)
            break
        case '/':
            res1 = num1 / num2;
            console.log(res1)
    }
    return res1
}


//--------------EXAMPLE------------------

let n1 = 5, n2 = 2;

const operations = '-';

console.log('Result: ' + calculator(n1, n2, operations))