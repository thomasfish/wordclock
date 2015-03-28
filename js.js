setInterval(function() {
  timecheck();
}, 1000);

function timecheck() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  var rs = 10 * Math.round(s/10);
  var rm = 5 * Math.round(m/5);
  $(".active").removeClass("active");
  if (rm > 30) {
    $("#to").addClass("active");
    var mins = 30 - (rm - 30);
    $("#m" + mins).addClass("active");
    h = h + 1;
  } else if ( 0 > rm <= 30) {
    $("#past").addClass("active");
    $("#m" + rm).addClass("active");
  }
  if (rm === 0) {
    $("#to").removeClass("active");
    $("#past").removeClass("active");
  }
  if (h > 12) {
    h = h - 12;
  }
  if (rs == 60) {
    rs = 0;
  }
  $("#h" + h).addClass("active");
  $("#s" + rs).addClass("active");
  $("#and").addClass("active");
  $("#secs").addClass("active");
}

function todark() {
  $("body").removeClass("light");
  $("body").removeClass("dark");
  $("body").addClass("dark");
}
function tolight() {
  $("body").removeClass("dark");
  $("body").removeClass("light");
  $("body").addClass("light");
}
