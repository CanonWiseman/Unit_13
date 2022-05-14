$(document).ready(function(){
    console.log("Let's get ready to party with jquery")
});

$('article img').addClass('image-center');

$('article p:last').remove();

$('h1').css({
    fontSize: function(){
        return `${Math.floor(Math.random()* 100)}px`;
    }
})

$('ol').append('<li> THIS IS AN ADDITIONAL LIST ITEM');

$('ol').html('<p>Sorry for that list, wont happen again</p>')

$(".form-control").on('keyup blur change', function () {
    let r = $(".form-control").eq(0).val();
    let b = $(".form-control").eq(1).val();
    let g = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + r + "," + g + "," + b + ")");
  });

  $('img').on('click', function(e){
      e.target.remove();
  })