//this is used to refer to current context
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
user.welcomeMessage()
user.username="uri"
user.welcomeMessage()
//console.log(this)               //empty object engine standalone ,in browser object is window

/*function chai(){
       //console.log(this);
       let username = "hitesh"
       console.log(this.username);   //output undefined works in object not function

    }
    
    chai()
    // const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }*/

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
chai()

/*const addTwoNos=(n1,n2)=>{
return n1+n2                              //explicit return
}*/

//const addTwoNos=(n1,n2)=>n1+n2                              //implicit return
const addTwoNos=(n1,n2)=>(n1+n2)    

console.log(addTwoNos(2,5));
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()