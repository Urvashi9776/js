function mul5(num)
{
    return 5*num
}
mul5.power=2
console.log(mul5(9));
console.log(mul5.power);
console.log(mul5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment=function()
{
    this.score++
}

createUser.prototype.printMe=function()
{
console.log(`price is,${this.score}`);
}

const chai=new createUser("uri",100);
const tea=createUser("riya",67)

chai.printMe()

