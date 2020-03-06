window.onload = function() {

function generate() {
  function myFunction(x) {
    var x = document.getElementById("rere").autoplay;
    document.getElementById("demo").innerHTML = x;
  
generate ();
  //function disableAutoplay() {
  // vid.autoplay = false;
  // vid.load();}

  //function checkAutoplay() {alert(vid.autoplay);}
}


var $items = document.querySelectorAll(".item");

const randomGenerator = Math.round(Math.random() * $items.length);
$items[0].innerHTML = ` <img src="images/image-${randomGenerator}.jpg"/>
 `;
