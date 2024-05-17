// if
const isUserloggedIn = true
if(2==="2")
    {
        console.log("hi");      //Strict check
    }

    const temperature=89
    if ( temperature === 40 ){
            console.log("less than 50");
         } else {
            console.log("temperature is greater than 50");
         }
    // <, >, <=, >=, ==, !=, ===, !==

    // const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

const balance=8
if(balance<10) console.log("h");   //implicit scope
// if (balance > 500) console.log("test"),console.log("test2");   // bad practice

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard)
    {
        console.log("Allow to buy");
    }

    if(loggedInFromEmail || loggedInFromGoogle)
        {
            console.log("Logged in");
        }