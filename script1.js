// ye light theme and dirk theme ke liye code kiya gya hai 
var icon = document.getElementById("icon1");
icon.onclick = function () {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        icon.src = "/storage/emulated/0/Web page/Portfolio 1/Sun.png";
    } else {
        icon.src = "/storage/emulated/0/Web page/Portfolio 1/Darkmoon.png";
    }
}


// side menu ke liye when jab mobile me ho 

var sidemeu = document.getElementById("sidemenu");
function openmenu() {
    sidemeu.style.right = "0";
}
function closemenu() {
    sidemeu.style.right = "-200px";
}


// ye code about ke niche jo three tab aa rhe hai uske liye hai 

//<--- about ke content ko click kr hatane ke liye aur lane ke liye javascript function bana rhe hai --->
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// <----- ye function se click krne per data aaye aur dusre ka data chala jaye uske liye ----->
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    // click krne per sara data aaye uske liye 
}