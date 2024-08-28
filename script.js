const input = document.querySelector("input");
const taskContainer = document.querySelector(".task-container");

function addTask() {
  let unList = document.createElement("ul");
  taskContainer.appendChild(unList);
  let itemList = document.createElement("li");
  unList.appendChild(itemList);
  itemList.innerHTML = input.value;
}
