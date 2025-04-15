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

