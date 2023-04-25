function createForm() {
  const data = [];

  const toDoList = document.querySelector(".todoList");

  function render() {
    toDoList.innerHTML = "";
    data.forEach((item, index) => {
      toDoList.innerHTML += `
              <div class="wrapper">
              №: ${index + 1}<br>
              <div class="tit">Title:${item.title}</div><br>
              <div class="desc">Description: ${item.description}</div><br>
              <button class="editButton">Edit</button>\n
              <button class="deleteButton">Delete</button>\n
              </div>
          `;
    });
  }

  function addItem(event) {
    event.preventDefault();
    const list = {
      title: document.querySelector("#title").value,
      description: document.querySelector("#description").value,
    };
    data.push(list);
    render();
  }

  document.querySelector("#submit").addEventListener("click", (event) => {
    addItem(event);
  });

  toDoList.addEventListener("click", (event) => {
    const myDelBtn = event.target.closest(".deleteButton");
    const wrapper = myDelBtn.closest(".wrapper");
    const index = Array.from(wrapper.parentElement.children).indexOf(wrapper);
    data.splice(index, 1);
    wrapper.remove();
    // render(); // рендеринг не соблюдает нумерацию как на предыдущей строке
  });
}
createForm();
