window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	clickEvent();
};

//the listener function here
const clickEvent = () => {
	document.getElementById("theGreen").addEventListener("click", () => alert("wuju"));
};
