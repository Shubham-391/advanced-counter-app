let reset = document.querySelector(".reset");
let add = document.querySelector(".add");
let save = document.querySelector(".save");
let output = document.querySelector(".output");
let savetext = document.querySelector(".savetext");

add.addEventListener("click", function () {
    output.innerHTML = +output.innerHTML + 1;
    save.classList.replace("notallowed", "save");
});

save.addEventListener("click", function () {
    if (output.innerHTML == 0) {
        save.classList.replace("save", "notallowed");
    } else {
        if (savetext.innerHTML == 0) {
            savetext.innerHTML = output.innerHTML;
        } else {
            savetext.innerHTML += ", " + output.innerHTML;
        }
        output.innerHTML = 0;
    }
});

reset.addEventListener("click", function () {
    output.innerHTML = 0;
    savetext.innerHTML = 0;
    save.classList.replace("notallowed", "save");
});

















// save.addEventListener("mouseover", function () {
//     if (output.innerHTML > 0) {
//         save.classList.replace("notallowed", "save");
//     }
// });