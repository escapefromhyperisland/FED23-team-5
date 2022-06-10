let right_code = "5926";

/////////////// buttons with code
function button_click(btn) {
  btn.innerHTML = (parseInt(btn.innerHTML) + 1) % 10;
}

function check_code() {
  let code = "";
  for (let i = 0; i < 4; i++) {
    code += document.getElementById("button_" + i.toString()).innerHTML;
  }
  if (code == right_code) {
    alert("Right code! You found a key inside!");
    localStorage.setItem("have_key", "true");
  } else {
    alert("Wrong code!");
  }
  window.location.href = "index.html";
}

function go_back() {
  window.location.href = "index.html";
}
