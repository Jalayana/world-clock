function updateTime() {
  //Beijing
  let beijingElement = document.querySelector("#beijing");
  if (beijingElement) {
    let beijingDateElement = beijingElement.querySelector(".date");
    let beijingTimeDifferenceElement =
      document.querySelector(".time-difference");
    let beijingTimeElement = beijingElement.querySelector(".time");
    let beijingTime = moment().tz("Asia/Shanghai");

    beijingDateElement.innerHTML = beijingTime.format("MMMM Do, YYYY");
    beijingTimeDifferenceElement.innerHTML = "3 hours ahead";
    beijingTimeElement.innerHTML = beijingTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeDifferenceElement =
      document.querySelector(".time-difference");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do, YYYY");
    newYorkTimeDifferenceElement.innerHTML = "3 hours ahead";
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/"> <button> Go Back </button>  </a>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
