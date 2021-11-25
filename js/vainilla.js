const codeTextVjs = document.querySelector("#code-in-js");
const demoConsoleContainerVjs = document.querySelector("#demo-console-js");

function vanillaJavaScript(id) {
  let number = id;
  let btn = document.createElement("button");
  let demoText = document.createElement("p");
  btn.classList.add("demo-btn");
  if (demoConsoleContainerVjs.children.length > 0) {
    while (demoConsoleContainerVjs.firstChild) {
      demoConsoleContainerVjs.removeChild(demoConsoleContainerVjs.lastChild);
    }
  }
  switch (number) {
    case 0:
      codeTextVjs.innerText = "document.createElement('p')";
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Create it!";
      btn.onclick = function () {
        let p = demoConsoleContainerVjs.appendChild(
          document.createElement("p")
        );
        p.innerText = "A <p> element has been created!";
      };
      break;
    case 1:
      codeTextVjs.innerText = `elementToRemove.remove()`;
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Remove me!";
      btn.onclick = function () {
        btn.remove();
      };
      break;
      default:
      
  }
}