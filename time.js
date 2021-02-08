window.onload = function(){
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var hours = document.querySelector("#hours");
  var minutes = document.querySelector("#minutes");
  var date = document.querySelector("#date");
  var setDate = function(){
    var d = new Date();
    var hour = d.getHours();
      hour = ( hour.toString().length > 1)? hour : "0"+hour;
    var min = d.getMinutes();
      min = (min.toString().length > 1)? min : "0" + min;
    hours.innerText = hour;
    minutes.innerText = min;
    date.innerText = dayNames[d.getDay()] + ", " + monthNames[d.getMonth()] + " " + d.getDate();
  }
  setDate();
  var timer = setInterval(setDate, 1000);
}