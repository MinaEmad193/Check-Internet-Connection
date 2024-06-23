let title = document.querySelector("h1")
let ul = document.querySelector("ul")
let reload = document.querySelector("button")


window.onload = function() {
    if (window.navigator.onLine) {
        onLine()
    } else {
        offLine()
    }
}
window.addEventListener("online", function() {
    onLine()
})

window.addEventListener("offline", function() {
    offLine()
})


function onLine() {
    title.innerHTML = "Online Now"
    title.style.color = "green"
    ul.style.display = "none"
    reload.style.display = "none"
}

function offLine() {
    title.innerHTML = "Offline Now"
    title.style.color = "rgb(70,70,70)"
    ul.style.display = "flex"
    reload.style.display = "flex"
}

reload.onclick = function() {
    window.location.reload()
}