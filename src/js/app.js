$(function(){

  /** prevent touch event **/
  $("body").on("touchmove", function(event){
    event.preventDefault();
  });

  $("[data-modal-close]").on("click", function(e){
    e.preventDefault();
    $(".modal").removeClass("modal-active");
    $(".modal-bg").hide();
  });

  $("#main-action").on("click", function(event){
    event.preventDefault();
    $(".modal").addClass("modal-active");
    $(".modal-bg").show();
    $.ajax({
      url: 'js/get_result.json',
      dataType: 'json',
      success: function(result){
        console.log(result);
        $(".modal p").html(result['message']);
        $(".modal img").attr("src", result['image']);
      }
    });
  });

  /** autuscroll **/
  window.setInterval(function(){
    $("tr:last-child").insertBefore("tr:first-child");
  }, 2000);
});
