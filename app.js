$(document).ready(function(){
  var test;
  console.log("hello world");
  $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/freecodecamp", function(data){
    test = data;
  })
  setInterval(function(){ console.log(); }, 10000);
});