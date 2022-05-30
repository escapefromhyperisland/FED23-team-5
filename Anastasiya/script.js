let have_key = false;

AFRAME.registerComponent("door", {
  schema: {
    default: "",
  },
  init() {
    const sky = document.querySelector("a-sky");
    this.el.addEventListener("click", () => {
      if (have_key) {
        alert("You escaped");
      } else {
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
    var b = false;
    this.el.addEventListener("click", () => {
      have_key = true;
      alert(have_key);
      // if (b) {
      //   sky.setAttribute("src", "#entrance");
      // } else {
      //   sky.setAttribute("src", "#study");
      // }
      // b = !b;
      // console.log("clicked");
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
      alert();
      // if (b) {
      //   sky.setAttribute("src", "#entrance");
      // } else {
      //   sky.setAttribute("src", "#study");
      // }
      // b = !b;
      // console.log("clicked");
    });
  },
});
