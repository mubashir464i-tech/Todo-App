// var input = document.getElementById("input")
// var add = document.getElementById('add')


// function addItem() {
//     if(input.value == ""){
//         alert("Please enter a value")
//     } else {
//         list.innerHTML += "<li>" + input.value + "</li>"
//         input.value = ""
//     }
// }

// var todo = document.getElementById("todo")
var input = document.getElementById("input")
var list = document.getElementById("list")

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addItem()
    }
})

input.addEventListener("input", function () {
    if (input.value != "") {
        input.style.border = "2px solid black"
    }
    else {
        input.style.border = "2px solid red"
    }
})

function addItem() {
    if (input.value == "") {
        input.style.border = "2px solid red"
    }
    else {
        list.innerHTML += `
        <li>
            <b>${input.value}</b>
            <span>
                <button onclick="deleteItem(this)" class="delete-btn">Delete</button>
                <button onclick="editItem(this)" class="edit-btn">Edit</button>
            </span>
        </li>`

        input.value = ""
    }
}

function deleteItem(e) {
    e.parentNode.parentNode.remove()
}

function editItem(e) {
    input.value = e.parentNode.parentNode.firstElementChild.innerHTML
    e.parentNode.parentNode.remove()
}