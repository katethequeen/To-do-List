const input = document.querySelector("input");
const taskContainer = document.querySelector(".task-container");

function addTask() {
  let unList = document.createElement("ul");
  taskContainer.appendChild(unList);
  let itemList = document.createElement("li");
  unList.appendChild(itemList);
  itemList.innerText = input.value;
  let buttonDel = document.createElement("button");
  buttonDel.classList.add("button-delete");
  buttonDel.innerText = "✖️";

  buttonDel.addEventListener("click", function () {
    itemList.remove();
  });
  itemList.appendChild(buttonDel);

  itemList.addEventListener("click", function () {
    itemList.classList.toggle("strike");
  });
}
