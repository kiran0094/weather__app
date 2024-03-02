let quary=document.getElementById('search')
let nameres=document.getElementById('name')//city
let btn=document.getElementsByTagName("button")[0]
async function checkweather(text){
	let img=document.getElementById('img')
	let weather=document.getElementById('weather_text')//text
	let humidity=document.getElementById('humidity')
	let wind=document.getElementById('wind')
	console.log(weather,humidity,wind)
	let url='http://api.weatherapi.com/v1/current.json?key=4e0e92e0998c40b9af8173842232308&q='+text
		const Response=  await fetch(url)
		var data=await Response.json()
		console.log(data)
		img.setAttribute('src',data.current.condition.icon)
		weather.innerText=data.current.condition.text
		humidity.innerText=data.current.humidity+'%'
		wind.innerText=data.current.wind_kph+'kmph'
		
	}


btn.addEventListener('click',function(){
	quary.innerText=''
	if(quary.value===''){
		alert('type the city name')
	}
	else{
		let text=quary.value
		console.log(text)
		checkweather(text)
		nameres.innerText=text		
	}
	quary.value=''
	
})













// .then((Response)=>
// {
// return Response.json()
// }).then((value)=>{
// 	nameres.innerText=text
// 	let image=value.condition.icon
// 	img.setAttribute('src',ima)

// 	console.log(value.current.condition.icon,value.current.humidity,value.current.wind_kph)
// 	console.log(value)
// })







































var data= fetch('http://api.weatherapi.com/v1/current.json?key=4e0e92e0998c40b9af8173842232308&q=London')
.then((Response)=>
{
	return Response.json()
}).then((value)=>{
	console.log(value.current.condition)
})