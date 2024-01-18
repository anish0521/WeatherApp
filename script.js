const apiKey=`c4027dad1f4a35b24f6b8c3abfd9591a`;
//const city="kolkata";
async function fetchWeatherData(city){
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        if(!response.ok){
            throw new Error("Unable To Fetch Data");
        }
        const data=await response.json();
        console.log(data);
        updateWeatherUI(data);
    }
    catch{
        console.error(error);
    }

}
const cityElement=document.querySelector(".s1");
const temperature=document.querySelector(".third");
const windSpeed=document.querySelector(".f1");
const humidity=document.querySelector(".f2");
const visibility=document.querySelector(".f3");
const des=document.querySelector(".s3");
const date=document.querySelector(".s2");
const  dicon=document.querySelector(".s3 i")


function updateWeatherUI(data){
  cityElement.textContent=data.name;
  temperature.textContent=`${Math.round(data.main.temp)}℃`;
  windSpeed.textContent=`${data.wind.speed}  KM/H`;
  humidity.textContent=`${data.main.humidity} %`;
  visibility.textContent=`${data.visibility/1000} KM`;
 des.textContent=data.weather[0].description;
 const currdate=new Date();
 date.textContent=currdate.toDateString();
}
const sform=document.querySelector(".first");
const cityInput=document.querySelector(".inputCity");
sform.addEventListener('submit',function(e){
    e.preventDefault();
    const city=cityInput.value;
    if(city!==''){
        fetchWeatherData(city);
        city.value="";
    }
});