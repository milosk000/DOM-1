//console.dir(document.domain)
//document.title="moj prvi sajt"
//console.dir(document.all)
//console.log (document.all(6))
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



