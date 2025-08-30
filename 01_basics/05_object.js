const tinderUser = new Object()
// console.log(tinderUser)


const tinderUser2 = {}

tinderUser2.id = 123
tinderUser2.name = "Bhushan"
tinderUser2.email = "bhushan@google.com"

// console.log(tinderUser2)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = {obj1, obj2}
// console.log(obj3);

const obj5 = {...obj1, ...obj4}
// console.log(obj5);


// console.log(Object.keys(tinderUser2));
// console.log(Object.values(tinderUser2));
// console.log(Object.entries(tinderUser2));


// console.log(tinderUser2.hasOwnProperty('email'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


const {coursename: abc} = course
// console.log(abc);


// functions

function test({username, email}){
    return `Welcome ${username}, Please confirm your mail id ${email}`
}

// console.log(test({
//     username: "Bhushan",
//     email: "bhushan@google.com",
//     phone: "1213131"
// }));


// console.log(addone(5))

function addone(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(2))

// IIFE

// (function chai(){
//     console.log("hey chai !")
// })();

// ((name)=>{
//     console.log(`Welcome ${name}`)
// })("Bhushan")


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



// console.log(val1);



const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const [key,value] of Object.entries(myObject)) {
    // console.log(`${key} shortcut is for ${value}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function(item){
    // console.log(`${item}abc`)
})

// console.log(coding);


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

// const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )

console.log(values);