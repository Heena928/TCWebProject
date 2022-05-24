let b1 = document.getElementById("PersonalButton");
let b2 = document.getElementById("JobButton");
let b3 = document.getElementById("CertiButton");

let c1 = document.getElementById("personalData");
let c2 = document.getElementById("jobData");
let c3 = document.getElementById("certData");

c2.classList.add("dispaly");
c3.classList.add("dispaly");

function personal() {
    c1.classList.remove("dispaly");
    c2.classList.add("dispaly");
    c3.classList.add("dispaly");

    b1.classList.add("selected-button")
    b2.classList.remove("selected-button");
    b3.classList.remove("selected-button");

}

function job() {
    c1.classList.add("dispaly");
    c2.classList.remove("dispaly");
    c3.classList.add("dispaly");


    b1.classList.remove("selected-button")
    b2.classList.add("selected-button");
    b3.classList.remove("selected-button");

}

function cert() {
    c1.classList.add("dispaly");
    c2.classList.add("dispaly");
    c3.classList.remove("dispaly");


    b1.classList.remove("selected-button")
    b2.classList.remove("selected-button");
    b3.classList.add("selected-button");
}