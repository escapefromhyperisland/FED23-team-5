AFRAME.registerComponent("key-handler-two", {
  
    init: function () {
       var scoreCount=20;
      var el = this.el;
      el.addEventListener('click', function (evt) {
        console.log("i am a key")
       let keySelected= el.getAttribute('id')
                console.log(keySelected);
        
                let key=document.getElementById("key2");
        console.log("oh my my");
                let htmlKey=document.getElementById("keyTwo");
        console.log(htmlKey);
        
                htmlKey.classList.add("displayNone");
                key.setAttribute('visible','false'); 
         scoreCount+=10;
                localStorage.setItem("scoreCount", scoreCount);
                localStorage.setItem("have_key", "true");
      })
    }
  });
