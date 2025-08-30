const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        // console.log("learning promise")
        resolve("learning promise")
    }, 2000);
})

promiseOne.then((res)=>{
    // console.log(res)
})


const promiseTwo = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({user: "Bhushan", email:"bhushan.ai@com"})
        }else{
            reject("ERROR: Something went wrong")
        }
    }, 3000);
})

// promiseTwo.then((res)=>{
//     console.log(res)
//     return res.user
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((e)=>{
//     console.log(`ERROR: ${e}`)
// })
// .finally(()=>{
//     console.log("promise completed !")
// })

async function promiseTest(){
    try {
        const result = await promiseTwo
        console.log(result)
    } catch (error) {
        console.log(`ERROR: ${error} triggered !`)
    }
    
}

// promiseTest()



// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));