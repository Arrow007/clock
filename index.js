const time = new Date();
let seconds = time.getSeconds();
let minutes = time.getMinutes();
let hours = time.getHours();

const secSpan = document.querySelector('#seconds');
const minSpan = document.querySelector('#minutes');
const hourSpan = document.querySelector('#hours');


const options = {
    minimumIntegerDigits: 2
}

setInterval(() => {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
            if (hours === 24) {
                hours = 0;
            }
        }
    }

    const outputSec = seconds.toLocaleString('en-US', options);
    const outputMin = minutes.toLocaleString('en-US', options);
    const outputHours = hours.toLocaleString('en-US', options);

    console.log(`${outputHours}:${outputMin}:${outputSec}`);

    hourSpan.innerText = `${outputHours}`;
    minSpan.innerText = `${outputMin}`;
    secSpan.innerText = `${outputSec}`;
}, 1000);
