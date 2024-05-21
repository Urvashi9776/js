// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh=function()
{
    console.log("uri everywhere");
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TASupport,Teacher)

let another="Coootieeee"

String.prototype.actualLength=function()
{
    console.log(this);
    console.log(`Actual length,${this.trim().length}`);
}

another.actualLength()
"uri".actualLength()