AFRAME.registerComponent("key-handler", {
  
    init: function () {
      var scoreCount=0;
      
      var el = this.el;
      el.addEventListener('click', function (evt) {
        console.log("i am a key")
       let keySelected= el.getAttribute('id')
                console.log(keySelected);
        
                let key=document.getElementById("key1");
        console.log("amazing");
                let htmlKey=document.getElementById("keyOne");
        console.log(htmlKey);
        
                htmlKey.classList.add("displayNone");
                key.setAttribute('visible','false'); 
          scoreCount+=10;
                localStorage.setItem("scoreCount", scoreCount);
                localStorage.setItem("have_key", "true");
      })
    }
  });

  
