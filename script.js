// your code here
function formSubmit(event) {
	
	event.preventDefault();
	
	var h3=document.querySelector("#url");
	var h3Value =  "https://localhost:8080/"
	var name=document.querySelector("#name").value;
	var year=document.querySelector("#year").value;
	
	
	if (name && year) {
	    h3Value += "?name=" + name + "&year=" + year;
	  } else if (name && !year) {
	   h3Value += "?name=" + name;
	  } else if (!name && year) {
	   h3Value += "?year=" + year;
	  }
	h3.innerText=h3Value;
}
document.querySelector("form").addEventListener('submit', formSubmit);




















