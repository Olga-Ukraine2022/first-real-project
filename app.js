function changeDegrees(event) {
  event.preventDefault();
  let degrees = document.querySelector("#change-table");
  let temperature = degrees.innerHTML;
  degrees.innerHTML = Math.round((temperature * 9) / 5 + 32);
}
let farenhaitLink = document.querySelector("#change-farenhaits");
farenhaitLink.addEventListener("click", changeDegrees);

function changeDegreesBack(event) {
  event.preventDefault();
  let degrees = document.querySelector("#change-table");
  degrees.innerHTML = "25";
}

let celsiumLink = document.querySelector("#change-celsium");
celsiumLink.addEventListener("click", changeDegreesBack);

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#example-City");
  let header = document.querySelector("#current-city");
  header.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function formatDate(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let currentDay = days[currentTime.getDay()];
  let currentMonth = months[currentTime.getMonth()];
  let currentDate = currentTime.getDate();
  let currentHours = currentTime.getHours();
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }
  let currentMinutes = currentTime.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  return `${currentDate} ${currentMonth}, ${currentDay} ${currentHours}:${currentMinutes}`;
}
let h3 = document.querySelector("h3");
let currentTime = new Date();

h3.innerHTML = formatDate(currentTime);
