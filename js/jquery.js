const codeTextJq = $("#code-in-jq");
const demoConsoleContainerJq = $("#demo-console-jq");

function jQueryScript(id) {
  let number = id;
  let btn = $("<button>");
  let demoText = $("<p>");
  btn.addClass("demo-btn");
  if (demoConsoleContainerJq.children().length > 0) {
    demoConsoleContainerJq.empty();
  }
  switch (number) {
    case 0:
      codeTextJq.text("$('<p>')");
      demoConsoleContainerJq.append(btn);
      btn.html("Create it!");
      btn.on("click", function () {
        demoConsoleContainerJq.append($("<p>A element has been created!</p>"));
      });
      break;
      case 1:
        codeTextJq.text(`elementToRemove.remove()`);
        demoConsoleContainerJq.append(btn);
        btn.html("Remove me!");
        btn.on("click", function () {
          btn.remove();
        });
        break;
    default:
      alert("default case");
  }
}