//console.dir(document.domain)
//document.title="moj prvi sajt"
//console.dir(document.all)
//console.log (document.all(6))
/*
let lis=document.getElementById("items")
//console.log(listitems)
let items=document.getElementsByClassName("list-items")
items[2].textContent = "paraglajder" 
//for(i = 0; i=listitems.length;i++)

//console.dir(document.getElementById("header title"))
let headerTitle=document.getElementById("header title")

headerTitle.innerHTML="<h3> ASD </h3>"
//console.log(headerTitle.textContent)
//console.log(headerTitle.innerText)

//textContent vs innerText

//console.log(document.getElementsByTagName("li"))
let li=document.getElementsByTagName("li")

li[1].textContent="asd"
li[1].style.fontSize="20px";
li[1].style.fontWeight="bold";

console.log(document.getElementsByClassName("title"))


let title=document.getElementsByClassName("title")
title[1].textContent="Promenila title"
let container=document.getElementById("container")
container.style.backgroundColor="purple"


//query selector

let drugiLink=document.querySelector(".link-item")
console.log(drugiLink)

drugiLink.style.backgroundColor="red"

//query selecor all
let lista=document.querySelecotAll(".list-item");
console.log(lista)
lista[2].textContent="ne znam sta"

*/
/*
//parentNode
let listItem = document.getElementById("items")
console.log(listItem.parentNode.parentNode)

//parentElement

console.log(listItem.parentElement)

listItem.parentElement.style.background = "purple"


//childNodes

console.log(listItem.childNodes)
listItem.childNodes[1].style.backgroundColor = "orange"
listItem.childNodes[5].style.backgroundColor = "orange"
console.log(listItem.childNodes[0])

//child (Element)

console.log(listItem.children)
listItem.children[0].style.background = "orange"


console.log(listItem.firstChild);

console.log(listItem.firstElementChild)

//lastChild
//lastElementChild


//siblings

console.log(listItem.previousElementSibling)
listItem.previousElementSibling.style.backgroundColor = "orange"

console.log(listItem.nextElementSibling)
listItem.nextElementSibling.style.backgroundColor = "orange"

let lista = document.querySelectorAll(".list-item");

console.log(lista)
lista[1].previousElementSibling.style.backgroundColor = "red"


lista[1].parentElement.parentElement.style.backgroundColor = "yellow"

*/
/*
let newDiv = document.createElement("div");
let textNode = document.createTextNode("Napravio sam novi element");
newDiv.appendChild(textNode);

let container = document.getElementById("container");
let h2 = document.querySelector("#container h2");
container.insertBefore(newDiv, h2);



//novi element
let paragraf = document.createElement("p");
//text
let text = document.createTextNode("lorem ipsum loremloremlorem");
//povezati element i text
paragraf.appendChild(text);

//izabrati element u koji ce da se stavi novi element
let divContainer = document.getElementById("svejedno");
//izabrati element pored kojeg ce da stoji novi element
let divP = document.querySelector("#svejedno p");
//staviti element u divContainer pored divP
svejedno.insertBefore(paragraf, divP);




let noviItem = document.createElement("li");
let textItem = document.createTextNode("novi item");
noviItem.appendChild(textItem);

let divItem = document.getElementById("items");
//items.insertBefore(noviItem,divItem.firstChild)
items.insertBefore(noviItem, divItem.lastChild.nextSibling)
*/

/*
//EVENT

let button = document.getElementById("button")
let textBox = document.getElementById("textBox")


let addNewItemToList = function () {
    let text = textBox.value
    let noviItem = document.createElement("li");
    let textItem = document.createTextNode(text);
    noviItem.appendChild(textItem);

    let divItem = document.getElementById("items");
    console.log(items.childNodes)
    //items.insertBefore(noviItem,divItem.firstChild)
    items.insertBefore(noviItem, divItem.lastChild.nextSibling)
    textBox.value = ""

}
*/
/*
let dugme1 = document.getElementById("dugme")
let radiNesto = function(event){
    console.log(event)
    console.log(event.target)
    console.log(event.target.id)
    console.log(event.offsetX)
}
dugme1.addEventListener('click', radiNesto)
*/
/*
let zuti1 = document.getElementById("zuti")
let changeColor = function(event){
    let bojaRGB = "rgb(" + event.offsetX + "," + event.offsetY + ", 40)"
    event.target.style.backgroundColor = bojaRGB
}
zuti1.addEventListener("mousemove", changeColor)
*/

let celaStrana = document.querySelector("*")
let bojaStranice = function(event){
    let red = Math.floor (event.pageX/(Window.InnerWidth/255+1))
    let green = Math.floor (event.pageX/(Window.InnerWidth/255+1))
    let bojaRGB = "rgb(" + event.offsetX + "," + event.offsetY + ", 60)"
    celaStrana.style.backgroundColor = bojaRGB
}
celaStrana.addEventListener("mousemove", bojaStranice)