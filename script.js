let sbt = document.getElementById("Submit");
let cll = document.getElementById("ClearList");
let txt = document.getElementById("myText");
let ul = document.getElementById("ul");

sbt.addEventListener("click", (e) => {
  if (txt.value !== "") {
    e.preventDefault();
    // create li
    let list = document.createElement("li");
    list.innerHTML = txt.value;
    ul.appendChild(list);
    // create delete and done
    let del = document.createElement("button");
    let done = document.createElement("button");
    del.innerHTML = "x";
    done.innerHTML = "Done";
    list.appendChild(del);
    list.appendChild(done);

    del.addEventListener("click", () => {
      list.removeChild(ul);
    });

    // for (let i = 0; i < del.length; i++) {
    //   del[i].addEventListener("click", () => {
    //     del[i].removeChild([0]);
    //   });
    // }
    // clear input
    txt.value = "";
  }
});
// clear all list
cll.addEventListener("click", function () {
  ul.textContent = "";
});

// document.getElementById("Submit").onclick = function () {
//   var myTask = document.getElementById("myText").value;
//   console.log(myTask);
// };

// create span
// let mySpan = document.createElement("span");
// mySpan.innerHTML = "del";
// list.appendChild(mySpan);

// let close = document.querySelectorAll("span");
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", () => {
//     close[i].parentElement.style.display = "none";
//   });
