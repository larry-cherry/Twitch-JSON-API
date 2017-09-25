//Requires JQuery, Font-Awesome
function Twitch() {
  this.pageLoadCount = 0;
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
      if(!$(stream).find("i").hasClass("fa-toggle-on")){
        $(stream).find("i").removeClass("fa-toggle-off");
        $(stream).find("i").addClass("fa-toggle-on");
      }
      $(stream).find("p").html(data.stream.channel.status) 
    
    } else {
      if(!$(stream).find("i").hasClass("fa-toggle-off")){
        $(stream).find("i").removeClass("fa-toggle-on");
        $("#freecodecamp").find("i").addClass("fa-toggle-off");
      }
      if($(stream).hasClass("active")) {
        $(stream).toggleClass("active");
      }
      $(stream).find("p").html("")
    }
  });
}
Twitch.prototype.checkChannel = function(channel) {
  $.getJSON("https://stark-dawn-64113.herokuapp.com/twitch?channel=" + channel, function(data){
    console.log(channel)  
    $("#" + channel).find("img").attr("src", data.logo)
  });
}