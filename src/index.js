//creating a array
const person=["Pranay","Preeti","Cassa","Nikhil"];
const addButton = document.getElementById("add");

function addPersonOnDOM(){

    const value =  Math.floor(Math.random() * 3);
    let newName = person[value];
    const navItem = document.createElement("li");
    const h1= document.createElement("h1");
    h1.innerHTML= newName.trim();
    navItem.appendChild(h1);
    document.querySelector("ul").appendChild(navItem);   
}

addButton.addEventListener("click",addPersonOnDOM);