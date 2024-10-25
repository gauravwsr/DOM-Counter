let conterEl = document.getElementById("conter");
let conter = 0;


function OndecConter() {
    conter--;
    conterEl.textContent = conter;
    if (conter < 0) {
        conterEl.style.color = "red";
    }
    else if (conter === 0) {
        conterEl.style.color = "black";
    }
}

function OnIncConter() {
    conter++;
    conterEl.textContent = conter;
    if (conter > 0) {
        if (conter > 0) {
            conterEl.textContent = "+" + conter;
        }
        conterEl.style.color = "green";
    } else if (conter === 0) {
        conterEl.style.color = "black";
    }
}
