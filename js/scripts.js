$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var textInput = $("input#text").val();

    $(".text").text(textInput.toUpperCase());

    $("#caps").show();

    event.preventDefault();
  });
});
