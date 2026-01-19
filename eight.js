let heading1 = document.createElement("h1")
document.body.appendChild(heading1)
heading1.innerText = "Hello World"
heading1.classList.add("heading1")

let heading2 = document.createElement("h2")
heading2.innerText = "Let us learn"
heading1.after(heading2) // you can also use appendChild

let heading3 = document.createElement("h2")
heading3.innerText = "Start here"
heading1.before(heading3) // you can also use prepend
