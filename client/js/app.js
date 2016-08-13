(function (){
  'use strict';

  window.onload = function() {
    var button = document.getElementById("stupidbutton");
    var origText = button.innerHTML;
    var onClickText = "wh00p!";

    button.onmousedown = function(e) {
      this.innerHTML = onClickText;
    };

    button.onmouseup = function(e) {
      this.innerHTML = origText;
    };
  };
}());
