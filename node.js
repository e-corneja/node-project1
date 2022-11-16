//// операционная система //..
/* import * as os from "os";

console.log(os.homedir());
console.log(os.hostname());
console.log(os.type());
console.log(os.release()); */

///////// Верстка с DOM ////////////
let body = document.body;
let p = document.createElement("p");
let div = document.createElement("div");
let a1 = document.createElement("a");
let a2 = document.createElement("a");
let a3 = document.createElement("a");

body.innerHTML = "<p></p>";
body.innerHTML = "<div></div>";

p.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusamus quas quae nam quo molestias assumenda, doloribus cum illum dolor a impedit fugiat! Saepe, iure? Obcaecati porro dolore ratione repellat!";
a1.innerText = "Altshu";
a2.innerText = "Google";
a3.innerText = "Instagram";

a1.href = "https://altshu.com/";
a2.href = "https://www.google.ru";
a3.href = "https://www.instagram.com/";
a1.target = "_blank";
a2.target = "_blank";
a3.target = "_blank";

body.append(p);
body.append(div);

div.append(a1);
div.append(a2);
div.append(a3);

body.style.width = "100vw";
body.style.height = "100vh";

p.style.border = "2px solid red";
p.style.borderRadius = "10px";
p.style.padding = "2rem";
p.style.background = "lightblue";
p.style.margin = "3rem";

div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.margin = "3rem";
