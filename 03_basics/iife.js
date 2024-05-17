//Immediately Invoked Funstion Expression
//used to immediately invoke like connecting database connection immediately
//also to avoid global scope pollution

(function chai(){
    console.log( `DB CONNECTED`);
})();                       //; to stop execution of iife
//chai()
//named iife

((name)=>{
console.log(`DB CONNECTED 2 ,${name}`);
})("uri")