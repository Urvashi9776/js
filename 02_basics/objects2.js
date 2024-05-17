//const tinderUser=new Object()
const tinderUser={}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser={
    email:"uri@hottie.com",
    fullname: {
        usrfullname:
        {
            fname:"uri",
            lname:"agg"
        }

    }
}
console.log(regularUser.fullname.usrfullname.lname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 ={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}  //spread function

console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[2].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('email'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(course.courseInstructor);
const {courseInstructor: inst}=course //destructuring
console.log(inst);


//json api
//{                                             
    //     "name": "hitesh", 
    //     "coursename": "js in hindi",
    //     "price": "free"
    // }
    //as object
    
    [
        {},
        {},
        {}
    ]
//as array