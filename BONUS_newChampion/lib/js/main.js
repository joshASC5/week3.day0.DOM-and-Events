let divAddition = document.querySelector(".main_container");
let actualDiv = document.createElement("div");
actualDiv.classList.add("pyke");
actualDiv.classList.add("champ_container");
divAddition.appendChild(actualDiv);

let h = document.createElement("h2");
let text = document.createTextNode("PYKE, THE BLOODHARBOR RIPPER");
actualDiv.appendChild(h);
h.appendChild(text);

let Pyke = document.querySelector(".pyke");
Pyke.style.backgroundImage = "url('pyke.jpg')";
Pyke.style.color = "#92fdfe";