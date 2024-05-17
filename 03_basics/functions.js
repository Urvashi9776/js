function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName()

function addNumbers(n1,n2) {                   //parameters
    console.log(n1+n2);
    
}
addNumbers(8,9)                                 //arguements

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){                                   //!usename same as username==undefined
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage(""))

function calculateCartPrice(...val) { //rest operator return as array
    return val
    
}
console.log(calculateCartPrice(100,200,300));

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyObject)
{
    console.log(`username is ${anyObject.username} and price is ${anyObject.prices}`)
}

handleObject(user)
handleObject({username:"uri",prices:100})

const myArr=[100,300,500]

function returnSecondVal(newArr) {
    console.log(newArr[2])
}
returnSecondVal(myArr)
returnSecondVal([1,2,34,5])