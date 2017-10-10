"use strict";

var ul = document.getElementsByTagName("ul")[0];
fetch("../data/api.json").then(function (response) {
  return response.json();
}).then(function (myJson) {
  var todos = myJson.todos;
  return todos.map(function (obj) {
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.innerHTML = "" + obj.label;
    li.appendChild(span);
    return ul.appendChild(li);
  });
});
