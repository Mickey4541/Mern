const tag = document.createElement("h1")//creating html element
tag.innerHTML = "Hello from js"

const root = document.querySelector("#root")//selecting a div with id root.
root.appendChild(tag)//inserting "Hello from js " inside div.

