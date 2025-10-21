// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const red = document.createElement("p");
red.classList.add("red");
red.style.color = "red";
red.textContent = "Hey, i'm red!";

const blue = document.createElement("h3");
blue.classList.add("blue");
blue.style.color = "blue";
blue.textContent = "I'm a blue h3!";

container.appendChild(content);
container.appendChild(red);
container.appendChild(blue);

const div = document.createElement("div");
div.style.cssText = "background: pink; border: 2px solid black;";

const h1 = document.createElement("h1");
h1.textContent = "I'm a div";
div.appendChild(h1);

const p = document.createElement("p");
p.textContent = "ME TOO!";
div.appendChild(p);

container.appendChild(div);

//button 2
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World2");

//button 3
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
	alert("Hello World3");
});

//button 4
function alertFunction() {
	alert("Alert with Function!! :)");
}

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", alertFunction);

//button 5
const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function (e) {
	e.target.style.cssText = "background: blue";
	console.log(e.target);
});

//group nodes buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", () =>{
		alert(button.id);
	});
});

