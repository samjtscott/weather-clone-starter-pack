console.log("Test")



window.onload = function() {

    var button = document.getElementById("button")
    var boundaries = document.getElementById("boundaries")
    var mainheading = document.getElementById("mainheading")
    var subheading = document.getElementById("subheading")
    var inputcontainer = document.getElementById("inputContainer")
    var weatherMain = document.getElementById("weatherMain")
    var weatherImage = document.getElementById("weatherImage")
    var weatherDescription = document.getElementById("weatherDescription")
    var weatherTemperature = document.getElementById("weatherTemperature")
    var weatherHumidity = document.getElementById("weatherHumidity")




    button.addEventListener("click", function() {
        var city = document.getElementById("CityInput").value

        console.log(city)
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=c9285e4ba63e20a83cd927cb6d41ebc3", true);
        xhr.onload = function(e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    console.log(data)
                    weatherMain.innerHTML = data.weather[0].main;
                    weatherDescription.innerHTML = data.weather[0].description;
                    weatherTemperature.innerHTML = (data.main.temp - 272.15).toFixed(0) + "<sup>o</sup>C"
                    weatherHumidity.innerHTML = data.main.humidity + "%"

                    var picturedescription = data.weather[0].main;
                    var subdescription = data.weather[0].description;
                    console.log(weatherImage);
                    if (picturedescription.includes("Rain")) {
                        weatherImage.setAttribute("src", "../../assets/images/rain.png");
                    } else if (picturedescription.includes("Cloud") && subdescription.includes("clouds")) {
                        weatherImage.setAttribute("src", "../../assets/images/cloudy.png");
                    } else if (picturedescription.includes("Cloud")) {
                        weatherImage.setAttribute("src", "../../assets/images/clouds.png");
                    } else if (picturedescription.includes("Clear")) {
                        weatherImage.setAttribute("src", "../../assets/images/clear.png");
                    } else if (picturedescription.includes("Snow")) {
                        weatherImage.setAttribute("src", "../../assets/images/snowflake.png");
                    } else if (picturedescription.includes("Drizzle")) {
                        weatherImage.setAttribute("src", "../../assets/images/rain.png");
                    } else if (picturedescription.includes("Fog")) {
                        weatherImage.setAttribute("src", "../../assets/images/smoke.png");
                    } else {
                        weatherImage.setAttribute("src", "");
                    }

                } else {
                    console.error(xhr.statusText);
                }
            }

        };

        xhr.onerror = function(e) {
            console.error(xhr.statusText)
        }

        xhr.send(null);
    })
}
