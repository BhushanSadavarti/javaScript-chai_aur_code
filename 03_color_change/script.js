const buttons = document.querySelectorAll(".box")
const body = document.querySelector("body")
console.log(buttons)

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e)
        console.log(e.target.id)
        if(e.target.id == "grey"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == "yellow"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == "blue"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == "orange"){
            body.style.backgroundColor = e.target.id
        }
    })
})