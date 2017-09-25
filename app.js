//requires Twitch object
$(document).ready(function(){
  window.twitch = new Twitch()

  function pageload(){
    console.log("Twitch check: " + window.twitch.count)
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
    window.twitch.count += 1
  }

  pageload()

  setInterval(function(){ pageload(); }, 15000);
});