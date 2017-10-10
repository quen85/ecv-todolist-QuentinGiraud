// @flow
const ul = document.getElementsByTagName("ul")[0];
fetch("../data/api.json")
  .then(response => response.json())
  .then(myJson => {
    let todos = myJson.todos;
    return todos.map(obj => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.innerHTML = `${obj.label}`;
      li.appendChild(span);
      return ul.appendChild(li);
    });
  });
