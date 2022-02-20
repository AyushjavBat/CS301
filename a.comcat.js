const a = [1, 2, 3];
const b = [4, 5, 6];
const d = [7, 8, 9];
const c = a.concat(b);
 
//[1, 2, 3, 4, 5, 6]
console.log(c);

const e = b.concat(a, c, d);
console.log(e);
//[4,5,6,1,2,3]
console.log(c);
console.log(a);
console.log(b);
console.log(d);

console.log(a);
console.log(c);
//a.push(3)