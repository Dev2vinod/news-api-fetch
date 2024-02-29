// 0dc68e8ab8d023164683bc93b1570c8b temp
// bbd7cfc1e60e520c748c5567dd0eb042 defalut

// 5691b4e0336445c7952191514241901 free weather api

var time = document.getElementById("time");
time.innerHTML = moment().format("Do MMM YY");

function getWeather(e) {
  e.preventDefault();

  var btn = document.getElementById("btn");
  var input = document.getElementById("input").value;
  var result = document.getElementById("result");
  var main = document.getElementById("main");
  var temp_min = document.getElementById("temp_min");
  var temp_max = document.getElementById("temp_max");
  var clouds = document.getElementById("clouds");
  var time = document.getElementById("time");

  // Make a request for a user with a given ID

  fetch(
    `http://api.weatherapi.com/v1/current.json?key=5691b4e0336445c7952191514241901&q=${input}&aqi=5691b4e0336445c7952191514241901`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res, "i am response");
      result.innerHTML = res.current.temp_c;
      main.innerHTML = res.current.condition.text;
      temp_min.innerHTML = res.location.name;
      // temp_max.innerHTML = res.main.temp_max;
      clouds.innerHTML = res.cloud;
    })
    .catch((err) => {
      console.log(err, " im errror");
    });
}
getWeather();

// https://www.google.com/maps/place/Delhi/@28.0234318,77.7466597,7.14z/data=!4m6!3m5!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902!16zL20vMDlmMDc?entry=ttu
