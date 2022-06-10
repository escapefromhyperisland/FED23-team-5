AFRAME.registerComponent("locker", {
   init: function () {
      var el = this.el;
      el.addEventListener('click', function (evt) {
      console.log("i am locker")
      if (localStorage.getItem("have_key","true")) {
       alert("locker is open");
       
      } 
      else {
        alert("get a key first")
      }
      })
       }
    });