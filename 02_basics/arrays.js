const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//-----------------------------Array Functions--------------------------

myArr.push(8);
console.log(myArr);
myArr.pop();
console.log(myArr);
myArr.unshift(5);
console.log(myArr);
myArr.shift();
console.log(myArr);
console.log(myArr.includes(7))
console.log(myArr.indexOf(7));
const mArr= myArr.join()
console.log(typeof(mArr));

//slice,splice

console.log("A",myArr)
const myn=myArr.slice(1,3)
console.log(myn);
console.log("B",myArr);
const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);

//slice does not change og array splice changes it