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
function displayWeatherCondition(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#change-table").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#higest").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#lowest").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
function search(city) {
  let apiKey = "f523b5f66e6722e873ea21469d0b366f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#example-city").value;
  search(city);
}
function changeDegrees(event) {
  event.preventDefault();
  let degrees = document.querySelector("#change-table");
  let temperature = degrees.innerHTML;
  degrees.innerHTML = Math.round((temperature * 9) / 5 + 32);
}
function changeDegreesBack(event) {
  event.preventDefault();
  let degrees = document.querySelector("#change-table");
  degrees.innerHTML = "25";
}

let h3 = document.querySelector("h3");
let currentTime = new Date();
h3.innerHTML = formatDate(currentTime);

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let farenhaitLink = document.querySelector("#change-farenhaits");
farenhaitLink.addEventListener("click", changeDegrees);
let celsiumLink = document.querySelector("#change-celsium");
celsiumLink.addEventListener("click", changeDegreesBack);

search("New York");
