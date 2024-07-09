async function search(city){
    try{
        let response= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6c732b43184f4a02aca42916240607&q=${city}&days=3`);
        let t=await response.json();
        display1(t.location,t.current);
        display2(t.forecast.forecastday);
        display3(t.forecast.forecastday);
    }
    catch(error){
        console.error('Error fetching weather data:', error);
    }
}
search('cairo');

let Search = document.getElementById('search');
Search.addEventListener('keyup', function () {
    search(this.value);
});

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function display1(location,current){
    let date=new Date(current.last_updated)
    let cartona=`
            <div class="head d-flex justify-content-between align-items-center px-4">
                    <div class="day co">${days[date.getDay()]}</div>
                    <div class="month co">${date.getDate()} ${months[date.getMonth()]}</div>
                </div>
                <div class="body px-4 pt-3 pb-5">
                    <div class="city fs-3 co">${location.name}</div>
                    <div class="d-flex align-items-center justify-content-between">
                    <div class="temp">${current.temp_c}<sup>o</sup>c</div>
                    <div class="icon"><img src="http:${current.condition.icon}" width="100px"></div>
                    </div>
                    <div class="status text-info fs-5">${current.condition.text}</div>
                    <div class="icons mt-4">
                        <span class="me-3"><img src="images/icon-umberella.png" alt="" class="mx-1">${current.cloud}%</span>
                        <span class="me-3"><img src="images/icon-wind.png" alt="" class="mx-1">${current.wind_kph}</span>
                        <span class="me-3"><img src="images/icon-compass.png" alt=""  class="mx-1">${current.wind_dir}</span>
                    </div>
                </div
    `
    document.querySelector('.day1').innerHTML = cartona;}
function display2(a){
    let cartona=`
                <div class="head ">${days[new Date(a[1].date).getDay()]}</div>
                <div class="body py-5">
                    <div class="weather-icon"><img src="http:${a[1].day.condition.icon}" width="100px"></div>
                    <p class="max m-0">${a[1].day.maxtemp_c}<sup>o</sup>c</p>
                    <p class="min co">${a[1].day.mintemp_c}<sup>o</sup>c</p>
                    <div class="status text-info fs-5">${a[1].day.condition.text}</div>
                </div>
    `
    document.querySelector('.day2').innerHTML = cartona;
}
function display3(a){
    let cartona=`
    <div class="head co">${days[new Date(a[2].date).getDay()]}</div>
     <div class="body py-5">
        <div class="weather-icon"><img src="http:${a[2].day.condition.icon}" width="100px"></div>
        <p class="max m-0">${a[2].day.maxtemp_c}<sup>o</sup>c</p>
        <p class="min co">${a[2].day.mintemp_c}<sup>o</sup>c</p>
        <div class="status text-info fs-5">${a[2].day.condition.text}</div>
     </div>
`
    document.querySelector('.day3').innerHTML = cartona;
}


