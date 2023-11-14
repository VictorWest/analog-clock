const secondHand = document.querySelector(".second")
const minuteHand = document.querySelector(".minute")
const hourHand = document.querySelector(".hour")

setInterval(() => {
    let secondChange = (((new Date).getSeconds())/60)*360
    secondHand.style.transform = `rotate(${secondChange}deg)`
}, 1000)
setInterval(() => {
    let secondChange = ((new Date).getSeconds()/60)
    let minuteChange = ((secondChange + (new Date).getMinutes())/60)*360
    minuteHand.style.transform = `rotate(${minuteChange}deg)`
}, 1000)
setInterval(() => {
    let secondChange = ((new Date).getSeconds()/60)
    let minuteChange = (secondChange + (new Date).getMinutes())/60
    let hourChange = ((minuteChange + ((new Date).getHours()))/12)*360
    console.log(hourChange);
    hourHand.style.transform = `rotate(${hourChange}deg)`
}, 1000)