var separate_time = function(date){
  var time = date.getTime();
  var sec   = Math.floor((time / 1000) % 60);
  var min   = Math.floor((time / 1000 / 60) % 60);
  var hours = Math.floor((time / 1000 / 60 / 60) % 24);
  var days  = Math.floor( time / 1000 / 60 / 60 / 24);
  return [sec, min, hours, days];
}

var now = new Date();
counter = separate_time(now);
document.getElementById('countdown').textContent = counter[2] + '時' + counter[1] + '分' + counter[0] + '秒';
