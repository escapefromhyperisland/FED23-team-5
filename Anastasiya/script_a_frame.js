AFRAME.registerComponent("door", {
  schema: {
    default: "",
  },
  init() {
    const sky = document.querySelector("a-sky");
    this.el.addEventListener("click", () => {
      if (localStorage.getItem("have_key")) {
        localStorage.setItem("have_key", "");
        alert("You escaped");
        window.location.href = "ShufflePuzzle.html";
      } else {
        // door_text = document.getElementById("doortext");
        // door_text.visible = true;
        alert("door is locked");
      }
    });
  },
});

AFRAME.registerComponent("washing_machine", {
  schema: {
    default: "",
  },
  init() {
    const sky = document.querySelector("a-sky");
    this.el.addEventListener("click", () => {
      window.location.href = "InsideWashingMachine.html";
    });
  },
});

AFRAME.registerComponent("bin", {
  schema: {
    default: "",
  },
  init() {
    let insideBin = false;
    this.el.addEventListener("click", () => {
      window.location.href = "PasswordHint.html";
    });
  },
});

// if (b) {
//   sky.setAttribute("src", "#entrance");
// } else {
//   sky.setAttribute("src", "#study");
// }
// b = !b;
// console.log("clicked");

// function story() {
//   alert(
//     "Oh..no! You started the washing machine and the key from the laundry is inside..."
//   );
//   alert(
//     "You have to stop the machine... But they are locked with special password, try to remember where is the paper with the password"
//   );
// }
