// 4 ways to choose the first p

console.log(document.getElementById("first"));
console.log(document.getElementsByClassName("special")[0]);
console.log(document.getElementsByTagName("p")[0]);
console.log(document.querySelector('p'));
console.log(document.querySelector('#first'));
console.log(document.querySelectorAll('p')[0]);


// changing #last style:
var last = document.querySelector('#last');
alert("content of #last before editing is: [" + last.textContent + "]");
last.style.border = "5px solid black";

// changing theme to dark:
var pageBody = document.body;
pageBody.classList.toggle("darkTheme");

// changing content of last:
last.textContent = "It's not the end, only a beginning";

// getting all the text from body:
var pageText = document.body.textContent;
console.log(pageText);

var a = document.querySelector('a');
alert("URL of the link is: " + a.getAttribute("href"));
a.setAttribute("href", "http://www.UrielYair.com");
alert("URL of the link after change is: " + a.getAttribute("href"));
a.textContent = "link to www.UrielYair.com";

var btn = document.querySelector("button");
btn.addEventListener("click", function() {
    pageBody.classList.toggle("darkTheme");
    document.querySelector("button+p").textContent = "button was clicked!";    
});



