var temp = document.getElementById("temp");
var city = document.getElementById("city")
var icon = document.getElementById("weatherIcon");
var desc = document.getElementById("weatherDesc");
var btn = document.getElementById("refreshBtn");
var input = document.getElementById("input");
var dataList = document.getElementById("datalist-json");
var weatherLocation = "nis";






window.addEventListener("load", getWeather);
input.addEventListener("keypress", function (event){
    
     if (event.keyCode === 13){
         event.preventDefault();
         weatherLocation = this.value;
         getWeather();
         this.value = "";
     }
 });
 btn.addEventListener("click", getWeather);

function getWeather(){
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+weatherLocation+"&units=metric&APPID=07e1a1062609d298c2ca81fcc314cf28";
    fetch(url)
    .then(function(request){
        if(!request.ok){
            throw Error(request.status);
        } 
        return request;
    })
    .then(function(res){
        return res.json()
        .then(function(data){
            city.innerHTML = data.name;
            temp.innerHTML = data.main.temp + "°C";
            desc.innerHTML = data.weather[0].description;
            icon.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        })
    })
    .catch(function(error){
        console.log(error);
    })
}

// should be suggestions, but doesn't work well
/* var cities = [];

$.get( "popularCities.json", function( data ) {
    $.each(data, function(index, value){
        var cityName = value.name;
        cities.push(cityName);
    });
});

$("#input").autocomplete({
    source: cities
}); */








       

