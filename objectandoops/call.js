function setUserName(name){
    this.name=name;
    console.log("called");
}

function user(name,email,pass)
{
    setUserName.call(this,name)
    this.email=email
    this.pass=pass
}

const uri=new user("uri","uri@gmail.com","pass")
console.log(uri);