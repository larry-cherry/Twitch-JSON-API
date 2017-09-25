//Requires JQuery, Font-Awesome
function Twitch() {
  this.count = 1;
}

Twitch.prototype.online = function(stream) {
  if(!$(stream).hasClass("active")) {
    return true;
  }else {
    return false;
  }
}

Twitch.prototype.checkStream = function(stream) {
  $.getJSON("https://stark-dawn-64113.herokuapp.com/twitch?stream=" + stream, function(data){
    stream = "#" + stream
    if(data.stream != null){
      if(!$(stream).hasClass("active")){
        $(stream).toggleClass("active");
      }
      else if(!$(stream).find("i").hasClass("fa-toggle-on")){
        $(stream).find("i").removeClass("fa-toggle-off");
        $(stream).find("i").addClass("fa-toggle-on");
      }
      $(stream).find("p").html(data.stream.channel.status) 
    
    } else {
      if(!$(stream).find("i").hasClass("fa-toggle-off")){
        $(stream).find("i").removeClass("fa-toggle-on");
        $("#freecodecamp").find("i").addClass("fa-toggle-off");
      }
      else if($(stream).hasClass("active")) {
        $(stream).toggleClass("active");
      }
      $(stream).find("p").html("")
    }
  });
}