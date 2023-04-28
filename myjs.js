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

  const change = document.querySelector(".change");
  function changeRender(event, title, description) {
    event.preventDefault();
    change.style.display = "block";
    change.innerHTML = `
      <div class="wrapper" >
       <h2>Edit</h2>
          <input type="text" name="title" id="title" value="${title.textContent}">
          <input type="text" name="description" id="description" value=" ${description.textContent}">
              <button class="saveButton">Save</button>\n
      </div>
    `;
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
    // wrapper.remove();
    render();
  });

  change.addEventListener("click", (event) => {
    const myEditBtn = event.target.closest(".editButton");
    if (myEditBtn) {
      const editWrapper = myEditBtn.closest(".wrapper");
      const title = editWrapper.querySelector(".tit");
      const description = editWrapper.querySelector(".desc");
    }
    changeRender(event, title, description);
  });
}
createForm();
