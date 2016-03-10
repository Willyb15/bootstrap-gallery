function pBar(){
	var pBar = document.getElementsByClassName("progress-bar");
		for(var i = 0; i < pBar.length; i++){
		pBar[i].classList.add('progress-bar-danger');
	}
}
console.log(pBar);

function stopBar(){
	var stopBar = document.getElementsByClassName("progress-bar");
	for(var i = 0; i < stopBar.length; i++){
	stopBar[i].classList.remove('progress-bar-danger');
	}
}
console.log(stopBar);
 

function talk(){
	var talk = document.getElementsByTagName("h1");
	var talk2 =document.getElementsByClassName("page-header");
	var talk3 = document.getElementById("message")

	talk3.innerHTML = "Isn't this Gallery Awesome!?!?";
	talk2.innerHTML="This is awesome 2";
	talk.innerHTML="This is awesome"
}

console.log(talk);

function stopTalk(){
	var stopTalk = document.getElementById("message");
	stopTalk.innerHTML = "Nature Porn Gallery";
}


