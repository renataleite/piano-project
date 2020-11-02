const keys = document.querySelectorAll(".key")

function playNote(event) {
    console.log(event.type)
}

keys.forEach(function (key) {
    key.addEventListener("click", playNote)
})

window.addEventListener("keydown", playNote)