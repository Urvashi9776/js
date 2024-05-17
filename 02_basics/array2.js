const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3][2]);

//const allHeroes=marvel_heros.concat(dc_heros)
//console.log(allHeroes);

const newher=[...marvel_heros,...dc_heros]   //spread operator can be on multiple arrays
console.log(newher);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("uri"));
console.log(Array.from("uri"));
console.log(Array.from({name:"uri"}));  //cant covert without info so empty array

let v1=10
let v2=30
let v3=50

console.log(Array.of(v1,v2,v3));
