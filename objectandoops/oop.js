const user={
    username: "uri",
    loginCount: 8,
    signedIn: true,
getUserDetails: function()
{
    console.log("Got user details from database");
    console.log(`Username,${this.username}`);
    console.log(this);
}
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);


function user1(username,loginCount,isLoggedIn)
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const usera=new user1("uri",6,true)

console.log(usera.constructor);