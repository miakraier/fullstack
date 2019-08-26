let email = document.getElementById("email");
let result = document.getElementById("h1")

function validetion() {
    let str = email.value
    str = str.split("@")
    if (str.length != 2) {
        result.innerHTML = "not valide email"
        return;
    }
    if (str[0].length == 0 || str[1].length == 0) {
        result.innerHTML = "not valide email"
        return;
    }
    str = str[1].split(".")
    if (str.length != 2) {
        result.innerHTML = "not valide email"
        return;
    }
    if (str[0].length == 0 || str[1].length == 0) {
        result.innerHTML = "not valide email"
        return;
    }
    else {
        result.innerHTML = "email is valide"
    }
}

let submit= document.getElementById("submit")
submit.addEventListener("click", validetion)