//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);
//var is avoided because it does not follow scope
//local and global scope are there

function one() {
    const a=90
    function two() {
        const b=20
        console.log(a);
    }
    //console.log(b);
    two()

}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//child can access parent can not

//---------------------------interesting------------------------------------------

console.log(addone(5))       //can be called before declaration

function addone(num){
    return num + 1
}



addTwo(5)                        //cant be called before declaration
const addTwo = function(num){
    return num + 2
}

//part of mini hoisting