let submit = document.getElementById("Submit");
let cll = document.getElementById("ClearList");
let txt = document.getElementById("myText");
let ul = document.getElementById("ul");

function inputLength() {
  return txt.value.length;
}


function createListElement() {
  let list = document.createElement("li");
  let del = document.createElement("button");
  let done = document.createElement("button");
  list.innerHTML = txt.value;
  del.innerHTML = "delete";
  done.innerHTML = "Done";
  del.id = "delete";
  done.id = "done";
  ul.appendChild(list);
  list.appendChild(del);
  list.appendChild(done);

  txt.value = "";
}


function addListAfterClick() {
  if(inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if(inputLength() > 0 & event.keyCode === 13) {
    createListElement();
  }
}

function doneTask(task) {
  if(task.target.id === "done") {
    console.log("hello world")
    task.target.parentElement.classList.toggle("done");
  }
}

function delList(tasklist) {
  if(tasklist.target.id === "delete") {
    tasklist.target.parentElement.remove();
  }
}

function clearList() {
  ul.innerHTML = '';
}




submit.addEventListener("click", addListAfterClick);

txt.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", doneTask);

ul.addEventListener("click", delList);

cll.addEventListener("click", clearList);





