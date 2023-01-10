const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1455199545msh53bfce68da0845bp10119cjsn23566562dee1',
		'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
	}
};
fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', options)
.then(response => response.json())
.then(response =>{
	console.log(response);
	document.getElementById("jokes").innerHTML=response[0].joke;
})
.catch(err => {
	if(err != 400)
		document.getElementById("jokes").innerHTML="Please Connect to the Internet."
	console.error(err);
});
let nameInputEL=document.querySelector(".name");
let otherEL=document.querySelector(".wrapper");
let userNameEL=document.getElementById("name");
let errorMsg=document.getElementById("error");
let wishMsg=document.getElementById("wish");

if(localStorage.getItem("name")===null || localStorage.getItem("name")==""){
	valueAsk();
}else if(localStorage.getItem("name")!=null || localStorage.getItem("name")!=""){
	valueSet();
}
function valueSet(){
	if(localStorage.getItem("name")==null ||localStorage.getItem("name")===""){
		if(localStorage.getItem("name")=="")
			errorMsg.style.display="block";
		valueAsk();
	}else{
		userNameEL.innerHTML=localStorage.getItem("name");
		nameInputEL.style.display="none";
		errorMsg.style.display="none";
		otherEL.style.display="block";
	}
}
function valueAsk(){
	nameInputEL.style.display="block";
	otherEL.style.display="none";
	document.getElementById("submit").addEventListener("click",function(){
		let inputname = document.getElementById("text").value;
		inputname=inputname.split(" ");
		localStorage.setItem("name",inputname[0]);
		valueSet();
	})	
}
document.getElementById("edit").addEventListener("click",valueAsk);	

let date = new Date().getHours();
if(date>=3 && date<=11){
	wishMsg.innerHTML="Good Morning ";
}else if(date>=12 && date<=19){
	wishMsg.innerHTML="Good Evening ";
}else if((date>=20 && date<=24) || (date>=0 && date<=2)){
	wishMsg.innerHTML="Good Night ";
}
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1455199545msh53bfce68da0845bp10119cjsn23566562dee1',
// 		'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', options)
// 	.then(response => response.json())
// 	.then(response =>{
// 		console.log(response);
// 		document.getElementById("jokes").innerHTML=response[0].joke;
// 	})
// 	.catch(err => console.error(err));
