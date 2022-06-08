AFRAME.registerComponent("key-handler-three", {
  
    init: function () {
       var scoreCount=40;
      var el = this.el;
      el.addEventListener('click', function (evt) {
        console.log("i am a key")
       let keySelected= el.getAttribute('id')
                console.log(keySelected);
        
                let key=document.getElementById("key3");
        console.log("wohooo");
                let htmlKey=document.getElementById("keyThree");
        console.log(htmlKey);
        
                htmlKey.classList.add("displayNone");
                key.setAttribute('visible','false'); 
          scoreCount+=10;
                localStorage.setItem("scoreCount", scoreCount);
                localStorage.setItem("have_key", "true");
      })
    }
  });
