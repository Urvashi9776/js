// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3

switch (month) {
    case 1: console.log("January");
        
        break;
        case 2: console.log("February");
        
        break;
        case 3: console.log("March");
        
        break;
    default: console.log("default case");
        break;
}
//if no break execute all code after match except default
const m="feb"
switch (m) {
    case "jan": console.log("January");
        
        break;
        case "feb": console.log("February");
        
        break;
        case "mar": console.log("March");
        
        break;
    default: console.log("default case");
        break;
}