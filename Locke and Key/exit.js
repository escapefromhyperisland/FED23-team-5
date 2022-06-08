   
AFRAME.registerComponent('exit-handler', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function (evt) {
        console.log("lets escape")
        alert("you can escaped")
        location.href="https://www.youtube.com/"
      
      })
    }
  });