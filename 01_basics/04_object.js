
const mySym = Symbol("key1")

const JsUser = {
    name: "Bhushan",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    greetingwithname : function(){
        console.log(`Welcome ${this.name}`)
    }
}


// console.log(JsUser.email);
// console.log(JsUser[mySym]);

// JsUser.email = "bhushan@chai.com"
// console.log(JsUser.email);
// Object.freeze(JsUser.email)
// JsUser.location = "Nagpur"
// console.log(JsUser.location);

JsUser.greeting = function(){
    console.log("Hello Bhushan");   
}


console.log(JsUser.greeting())
console.log(JsUser.greetingwithname())

