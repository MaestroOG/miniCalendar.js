const date = document.querySelector(".date h1");
const day = document.getElementById("day");
const year = document.getElementById("year");
const month = document.querySelector(".m-y h2");

let today = new Date();
let currentDate = today.getDate();
let currentDay = today.getDay();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();

date.innerHTML = currentDate;
year.innerHTML = currentYear;

console.log(currentMonth);
console.log(currentDay);

switch (currentMonth) {
    case 1:
        month.innerHTML = "January";
        break;
    case 2:
        month.innerHTML = "February";
        break;
    case 3:
        month.innerHTML = "March";
        break;
    case 4:
        month.innerHTML = "April";
        break;
    case 5:
        month.innerHTML = "May";
        break;
    case 6:
        month.innerHTML = "June";
        break;
    case 7:
        month.innerHTML = "July";
        break;
    case 8:
        month.innerHTML = "August";
        break;
    case 9:
        month.innerHTML = "September";
        break;
    case 10:
        month.innerHTML = "October";
        break;
    case 11:
        month.innerHTML = "November";
        break;
    case 12:
        month.innerHTML = "December";
        break;

    default:
        console.error("Warr gaye!");
        break;
}

switch (currentDay) {
    case 1:
        day.innerHTML = "Monday";
        break;
    case 2:
        day.innerHTML = "Tuesday";
        break;
    case 3:
        day.innerHTML = "Wednesday";
        break;
    case 4:
        day.innerHTML = "Thursday";
        break;
    case 5:
        day.innerHTML = "Friday";
        break;
    case 6:
        day.innerHTML = "Saturday";
        break;
    case 7:
        day.innerHTML = "Sunday";
        break;
    default:
        console.error("Warr Gaye!")
        break;
}