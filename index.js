
const arr = [3, 4, 7, 45, 10, 35, 2, 0, 1, 6, 6];
const arr1 = [1, 1, 1, 1, 1];
// Array reverse
function printReverse(arr) {
    document.write(arr.reverse());
}

function isUniform(array) {
    return array.every(function(element) {
      document.write(element === array[0]);
    });
}

function sumArray(array) {
    return array.reduce(function(acc, current) {
      return acc + current;
    }, 0);
}

function max(array) {
    return Math.max.apply(null, array);
}

function contains(array, element) {
    return array.includes(element);
}

function reverse(array) {
    return array.slice().reverse();
}

document.write("Questão 1: ")
printReverse(arr);
document.write("<br> Questão 2: ");
isUniform(arr1);
document.write("<br> Questão 3:");
document.write(sumArray(arr));
document.write("<br> Questão 4:");
document.write(max(arr));
document.write("<br> Questão 5:");
document.write(contains(arr, 2));
document.write("<br> Questão 6:");
document.write(reverse(arr));