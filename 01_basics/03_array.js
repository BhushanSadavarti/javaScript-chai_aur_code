const marvelHeroes = ["spiderman", "thor", "ironman"]
const dcHeroes = ["superman", "batman"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][2])

// const newHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(newHeroes);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const newArray = another_array.flat(Infinity)
// console.log(newArray);

// console.log(Array.isArray(["Hitesh", "bhushan"]));

// console.log(Array.from("Hitesh"));

// console.log(Array.from({name: "Bhushan"}));

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3));






