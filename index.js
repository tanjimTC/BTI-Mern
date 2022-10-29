let inputField = document.querySelector(".input-field");
let addButtton = document.querySelector(".add-button");
let ul = document.querySelector(".list-container");
let deleteButton = document.querySelector(".cross-button");

// get Items from local storage
let items = JSON.parse(localStorage.getItem("binary-todo")) || [];

if (items.length > 0) {
  addItemsFromLocalStorage();
}

addButtton.addEventListener("click", function () {
  let inputText = inputField.value;
  // save to local storage
  addItemToLocalStorage(inputText);
  // add to the list
  addItemToList(inputText);
  inputField.value = "";
});

// add items to local storage
function addItemToLocalStorage(item) {
  items.push(item);
  localStorage.setItem("binary-todo", JSON.stringify(items));
}

// add items to the list
function addItemToList(item) {
  let li = document.createElement("li");
  li.innerHTML = item;
  //  add cross image to the list item
  let crossButton = document.createElement("img");
  crossButton.src =
    "https://cdn1.iconfinder.com/data/icons/creative-round-ui/254/40-84.png";
  crossButton.classList.add("cross-button");
  li.appendChild(crossButton);
  ul.appendChild(li);
}

// add items to the list from local storage
function addItemsFromLocalStorage() {
  items.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item;
    ul.appendChild(li);
    let crossButton = document.createElement("img");
    crossButton.src =
      "https://cdn1.iconfinder.com/data/icons/creative-round-ui/254/40-84.png";
    crossButton.classList.add("cross-button");
    li.appendChild(crossButton);
  });
}

// add event listener to the dynamically created cross button
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("cross-button")) {
    deleteItemFromList(e);
    deleteItemFromLocalStorage(e.target.parentElement.innerText);
  }
});

// delete items from the list
function deleteItemFromList(e) {
  let li = e.target.parentElement;
  ul.removeChild(li);
}

// delete items from local storage
function deleteItemFromLocalStorage(item) {
  let items = JSON.parse(localStorage.getItem("binary-todo")) || [];
  items.forEach((element, index) => {
    if (element === item) {
      items.splice(index, 1);
    }
  });
  localStorage.setItem("binary-todo", JSON.stringify(items));
}
