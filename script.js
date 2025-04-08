setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const dateElement = document.getElementById('date')
const timeElement = document.getElementById('time')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours() % 12) / 12 // Use % 12 for 12-hour format
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
    setDateAndTime(currentDate) // Update date and time
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

function setDateAndTime(now) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.innerText = now.toLocaleDateString(undefined, options);

    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    timeElement.innerText = now.toLocaleTimeString(undefined, timeOptions);
}

setClock()
