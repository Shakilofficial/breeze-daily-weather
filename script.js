const apiKey = "b46e5759d9744ab9aef101257242208";
let city = document.querySelector(".name");
let form = document.querySelector("form");
let temperature = document.querySelector(".temperature");
let description = document.querySelector(".description");
let valueSearch = document.getElementById("name");
let clouds = document.getElementById("clouds");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let main = document.querySelector("main");
let background = document.querySelector("body");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (valueSearch.value !== "") {
    searchWeather(valueSearch.value);
  }
});

const searchWeather = (query) => {
  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        city.querySelector("figcaption").innerText = data.location.name;
        temperature.querySelector(
          "img"
        ).src = `https:${data.current.condition.icon}`;
        temperature.querySelector("span").innerText = data.current.temp_c;
        description.innerText = data.current.condition.text;

        clouds.innerText = data.current.cloud;
        humidity.innerText = data.current.humidity;
        pressure.innerText = data.current.pressure_mb;

        updateBackground(data.current.condition.text, data.current.is_day);
      } else {
        main.classList.add("error");
        setTimeout(() => main.classList.remove("error"), 1000);
      }
      valueSearch.value = "";
    });
};

const updateBackground = (condition, isDay) => {
  let backgroundImage = "";

  if (isDay) {
    switch (condition.toLowerCase()) {
      case "clear":
        backgroundImage = "url(assets/images/sunny.jpg)";
        break;
      case "partly cloudy":
      case "cloudy":
        backgroundImage = "url(assets/images/cloudy.jpg)";
        break;
      case "rain":
        backgroundImage = "url(assets/images/rainy.jpg)";
        break;
      case "snow":
        backgroundImage = "url(assets/images/snowy.jpg)";
        break;
      default:
        backgroundImage = "url(assets/images/home.jpg)";
        break;
    }
  } else {
    switch (condition.toLowerCase()) {
      case "clear":
      case "partly cloudy":
        backgroundImage =
          "url(https://preview.redd.it/q4voiyndwos91.jpg?width=1080&crop=smart&auto=webp&s=d0e49e75a5d9b5414bd56128c5e146695690eb8d)";
        break;
      case "cloudy":
        backgroundImage =
          "url(https://preview.redd.it/q4voiyndwos91.jpg?width=1080&crop=smart&auto=webp&s=d0e49e75a5d9b5414bd56128c5e146695690eb8d)";
        break;
      case "rain":
        backgroundImage =
          "url(https://niche.com.pk/wp-content/uploads/2020/07/maxresdefault.jpg)";
        break;
      case "snow":
        backgroundImage =
          "url(https://t3.ftcdn.net/jpg/06/58/38/66/360_F_658386615_r95EEOUvspp4onkj2wXiSN0sDLsBBfcv.jpg)";
        break;
      default:
        backgroundImage =
          "url(https://wallpapers.com/images/featured/night-sky-moon-pictures-y8xsj6aoisw09dvo.jpg)";
        break;
    }
  }

  background.style.backgroundImage = backgroundImage;
};

// View Weather a default city : Dhaka
searchWeather("Dhaka");
