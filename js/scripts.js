var results = [];
$(document).ready(function(){
  $("#splashButton").click(function(){
    $(".splashPage").hide();
    $(".fortune").show();
  });

  $("form#fortune_survey").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=fortune-kitty]:checked").each(function(){
      results.push($(this).val());
    });
    if (results.length >= 0 && results.length <= 1) {
      $(".fortune").hide();
      $(".result1").show();
    }
    else if (results.length >= 2 && results.length <= 3) {
      $(".fortune").hide();
      $(".result2").show();
    }
    else if (results.length >= 4 && results.length <= 5) {
      $(".fortune").hide();
      $(".result3").show();
    }
  });
});
