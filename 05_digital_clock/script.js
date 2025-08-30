const time = document.getElementById("time")

// console.log(date.toLocaleTimeString())

setInterval(() => {
    let date = new Date()
    let currTime = date.toLocaleTimeString()
    time.textContent = currTime
}, 1000);