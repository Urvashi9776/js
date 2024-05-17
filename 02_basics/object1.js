// singleton
// Object.create

// object literals

const mySym=Symbol("key1")

const JSUser = {
    name: "uri",
    age:18,
    "full name":"uri agg",
    [mySym]:"mykey1",
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

console.log(JSUser.email);
console.log(JSUser["full name"]);
console.log(JSUser[mySym]);    //for symbol use[] at both places

JSUser.age=67
console.log(JSUser.age);
//Object.freeze(JSUser)   //no change

JSUser.age=89
console.log(JSUser.age);

JSUser.greeting=function()
{
    console.log("hello");
}
JSUser.greetingtwo=function()
{
    console.log(`hello,${this.name}`);
}
console.log(JSUser.greeting)
console.log(JSUser.greeting())
console.log(JSUser.greetingtwo())

