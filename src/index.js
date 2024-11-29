function updateTime() {
  //Beijing
  let beijingElement = document.querySelector("#beijing");
  let beijingDateElement = beijingElement.querySelector(".date");
  let beijingTimeDifferenceElement = document.querySelector(".time-difference");
  let beijingTimeElement = beijingElement.querySelector(".time");
  let beijingTime = moment().tz("Asia/Shanghai");

  beijingDateElement.innerHTML = beijingTime.format("MMMM Do, YYYY");
  beijingTimeDifferenceElement.innerHTML = "3 hours ahead";
  beijingTimeElement.innerHTML = beijingTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //New York
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeDifferenceElement = document.querySelector(".time-difference");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do, YYYY");
  newYorkTimeDifferenceElement.innerHTML = "3 hours ahead";
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
