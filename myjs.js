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
  function changeRender(event) {
    event.preventDefault();

    const myWrapper = event.target.closest(".wrapper");
    const myIndex = Array.from(myWrapper.parentElement.children).indexOf(
      myWrapper
    );
    change.innerHTML = `
       <div class="wrapper" >
        <h2>Edit</h2>
           <input type="text" name="change_title" id="change_title" value="${data[myIndex].title}">
           <input type="text" name="change_description" id="change_description" value=" ${data[myIndex].description}">
               <button class="saveButton">Save</button>\n
       </div>
     `;
    change.style.display = "block";

    change.querySelector(".saveButton").addEventListener("click", (event) => {
      const changetTitle = document.querySelector("#change_title");
      const changetDescription = document.querySelector("#change_description");
      data[myIndex].title = changetTitle.value;
      data[myIndex].description = changetDescription.value;
      render();
      change.style.display = "none";
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
    if (myDelBtn) {
      const wrapper = myDelBtn.closest(".wrapper");
      const index = Array.from(wrapper.parentElement.children).indexOf(wrapper);
      data.splice(index, 1);
      // wrapper.remove();
      render();
    }
  });

  toDoList.addEventListener("click", (event) => {
    const myEditBtn = event.target.closest(".editButton");
    if (myEditBtn) {
      changeRender(event);
    }
  });
}
createForm();
