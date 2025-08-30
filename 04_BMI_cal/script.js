console.log("BMI cal")

const form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault()
    let height = document.getElementById("height").value
    let weight = document.getElementById("weight").value
    let result = document.getElementById("result")

    if(height == '' || height < 0 || isNaN(height)){
        result.textContent = "Please ENTER tha valid number !"
    }
    else if(weight == '' || height < 0 || isNaN(weight)){
        result.textContent = "Please ENTER tha valid number !"
    }else{
        const bmi = (weight/((height * height) / 10000)).toFixed(2)
        result.textContent = `Your BMI is ${bmi}`
        

    }
})