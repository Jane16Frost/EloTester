$(".nav-item").click(function(){
  $('.navbar-collapse').addClass('collapse');
  $('.navbar-collapse').removeClass('show');
});

$(".packageBtn").click(function()
{
  $(".PopUp").removeClass('hidden');

});

$(".closeBtn").click(function()
{
    $(".PopUp").addClass('hidden');
});
