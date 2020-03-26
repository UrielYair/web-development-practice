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
var pageBody = document.body.classList.toggle("darkTheme");
