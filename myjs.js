const data = []; // речь на занятии шла о том, что мы не должны выносить переменные за предел функций как в данном случае этого избежать?;
document.querySelector("#submit").addEventListener("click", (event) => {
  event.preventDefault();
  const list = {
    title: document.querySelector("#title").value,
    description: document.querySelector("#description").value,
  };
  data.push(list);

  document.querySelector(".todoList").innerHTML = "";
  data.forEach((item, index) => {
    document.querySelector(".todoList").innerHTML += `
              <div class="wrapper">
              №: ${index + 1}<br>
              <div class="tit">Title:${item.title}</div><br>
              <div class="desc">Description: ${item.description}</div><br>
              <button class="editButton">Edit</button>\n
              <button class="deleteButton">Delete</button>\n
              </div>
          `;
  });
});

document.querySelector(".todoList").addEventListener("click", (event) => {
  const myDelBtn = event.target.closest(".deleteButton");
  const wrapper = myDelBtn.closest(".wrapper");
  const index = Array.from(wrapper.parentElement.children).indexOf(wrapper);
  data.splice(index, 1);
  wrapper.remove();
});

// document.querySelector(".editButton").addEventListener("click", (event) => {
//   const wrapper = event.target.closest(".wrapper");
//   const title = listItem.querySelector(".tit");
//   const description = listItem.querySelector(".desc");

//   const titleInput = document.createElement("input");
//   titleInput.classList = "edit_title";
//   titleInput.type = "text";
//   titleInput.value = document.querySelector(".tit").replace("Title: ", "");
//   const makeEditButtton = document.createElement("input");
//   titleInput.type = "button";
//   makeEditButtton.classList = "make_edit_button";
// });
