const secondHand = document.querySelector(".second")
const minuteHand = document.querySelector(".minute")
const hourHand = document.querySelector(".hour")

setInterval(() => {
    let secondChange = (((new Date).getSeconds())/60)*360
    secondHand.style.transform = `rotate(${secondChange}deg)`
}, 1000)
setInterval(() => {
    let minuteChange = (((new Date).getMinutes())/60)*360
    // console.log(minuteChange)
    minuteHand.style.transform = `rotate(${minuteChange}deg)`
}, 1000)

var hourChange = (((new Date).getHours()/12)*360)
setInterval(() => {
    hourChange += 0.5
    console.log(hourChange)
    hourHand.style.transform = `rotate(${hourChange}deg)`
}, 1000)