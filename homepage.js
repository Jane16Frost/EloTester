$(".nav-item").click(function(){
  $('.navbar-collapse').addClass('collapse');
  $('.navbar-collapse').removeClass('show');
});

$(".packageBtn").click(function()
{
  $(".PopUp").removeClass('hidden');
  $(".taskBar").addClass('hidden');
  $("hr").addClass("invisible");

});

$(".closeBtn").click(function()
{
    $(".PopUp").addClass('hidden');
    $(".taskBar").removeClass('hidden');
    $('hr').removeClass('invisible');
});

$(".emailBtn").click(function()
{
  $(".PopUp").removeClass('hidden');
  $(".taskBar").addClass('hidden');
  $("hr").addClass("invisible");

});
