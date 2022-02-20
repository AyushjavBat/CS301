let items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
]

let hasInexpensiveItems = items.every((item) => {
    return item.price < 1000

})

console.log(hasInexpensiveItems);

function isBigEnough(element, index, array) {
    return element >= 10;
}


[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

function isSubset(array1, array2) {
    // returns true if array2 is a subset of array1

    return array2.every(function(element) {
        return array1.includes(element);
    });
}

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false