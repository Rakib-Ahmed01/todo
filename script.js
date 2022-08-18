const addTaskInput = document.querySelector("#add-task");
const addTaskBtn = document.querySelector("#add-btn");
const tBody = document.querySelector("#tbody");

let number = 1;

addTaskBtn.addEventListener("click", () => {
  let element = document.createElement("tr");
  element.innerHTML = `
  <td class="p-2">${number++}</td>
  <td id="desc" class="p-2">${addTaskInput.value}</td>
  <td class="p-2 space-x-2">
    <button
      id="done-btn"
      class="px-3 py-[5px] rounded bg-emerald-400 text-white font-semibold mr-3" onclick="doneFunc(this)"
    >
      Done
    </button>
    <i id="del-btn" class="fa-solid fa-xmark cursor-pointer ml-3" onclick="delFunc(this)"></i>
  </td>
`;

  element.classList.add("border-b-2");
  tBody.appendChild(element);
  addTaskInput.value = "";
});

function doneFunc(event) {
  console.log();
  event.parentElement.previousElementSibling.style.textDecoration =
    "line-through double";
}

function delFunc(event) {
  event.parentElement.parentElement.remove();
  number--;
}
