//requires Twitch object
$(document).ready(function(){
  window.twitch = new Twitch()
function icons() {
  window.twitch.checkChannel("freecodecamp");
  window.twitch.checkChannel("kaypikefashion")
  window.twitch.checkChannel("streamerhouse");
  window.twitch.checkChannel("pianoimproman");
  window.twitch.checkChannel("medrybw");
  window.twitch.checkChannel("domesticdan");
  window.twitch.checkChannel("johnlestudio");
  window.twitch.checkChannel("suchikuchi");
  window.twitch.checkChannel("bjornsworkshop");
  window.twitch.checkChannel("volpinprops");
  //window.twitch.checkChannel("");
}
  function pageload(){
    window.twitch.checkStream("freecodecamp");
    window.twitch.checkStream("kaypikefashion");
    window.twitch.checkStream("streamerhouse");
    window.twitch.checkStream("pianoimproman");
    window.twitch.checkStream("medrybw");
    window.twitch.checkStream("domesticdan");
    window.twitch.checkStream("johnlestudio");
    window.twitch.checkStream("suchikuchi");
    window.twitch.checkStream("bjornsworkshop");
    window.twitch.checkStream("volpinprops");
    window.twitch.pageLoadCount += 1
  }
  icons();
  setTimeout( function() { pageload(); }, 1000)

  setInterval(function(){ pageload(); }, 15000);
});