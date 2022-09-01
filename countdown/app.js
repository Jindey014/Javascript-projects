const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "october",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4")

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2022, 6, 29, 10, 50, 0); yo hardcode bhayeko lai hatako
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 40, 0);
const years = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

let weekday = futureDate.getDay();
weekday = weekdays[weekday];
giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${years},${hours}:${minutes} am`

//future time in miliseconds
const futureTime = futureDate.getTime();
// console.log(futureTime);

function remTime() {
    const today = new Date().getTime();
    // console.log(rem);
    const t = futureTime - today;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let day = t / oneDay;
    day = Math.floor(day);

    let hour = (t % oneDay) / oneHour;
    hour = Math.floor(hour);

    let minute = (t % oneHour) / oneMinute;
    minute = Math.floor(minute);

    let second = (t % oneMinute) / 1000;
    second = Math.floor(second);

    //set values array

    const values = [day, hour, minute, second];
    function format(item) {
        if (item < 10) {
            return item = `0${item}`
        }
        return item
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });
    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class = "expired">Sorry, This Giveaway had ended </h4>`;
    }
}
//countdown
let countdown = setInterval(remTime, 1000)

remTime();
