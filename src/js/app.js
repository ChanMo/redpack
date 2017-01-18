$(function(){
  /** prevent touch event **/
  $("body").on("touchmove", function(event){
    event.preventDefault();
  });

  /** autuscroll **/
  window.setInterval(function(){
    $("tr:last-child").insertBefore("tr:first-child");
  }, 2000);
});
