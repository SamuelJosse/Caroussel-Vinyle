$(function () {
  $(".panneauTxt").hide();

  $(".volet").click(function () {
    if ($(".volet") != $(this)) {
      $(".panneauTxt").hide();
      $(".volet").animate({ width: "192.5px" }, 500)
    }


    $(this).animate({ width: "470px" }, function () {
      $(this).find(".txtbulle").fadeIn();
    });
  });

  $(".central").click(function () {
    $(".panneauTxt").hide();
    $(".volet").animate({ width: "192.5px" }, 500, function () {
    });
  });
});