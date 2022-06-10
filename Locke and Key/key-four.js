AFRAME.registerComponent("key-handler-four", {
  
    init: function () {
      var scoreCount=80;
      var el = this.el;
      el.addEventListener('click', function (evt) {
        console.log("i am a key")
       let keySelected= el.getAttribute('id')
                console.log(keySelected);
        
                let key=document.getElementById("key4");
        console.log("you did it");
                let htmlKey=document.getElementById("keyFour");
        console.log(htmlKey);
        
                htmlKey.classList.add("displayNone");
                key.setAttribute('visible','false'); 
          scoreCount+=10;
                localStorage.setItem("scoreCount", scoreCount);
                localStorage.setItem("have_key", "true");
      })
    }
  });

  
