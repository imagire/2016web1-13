var separate_time = function(date){
  var time = date.getTime();
  var sec   = time.getSeconds();
  var min   = time.getMinutes();
  var hours = time.getHours();
  var days  = time.getDate();
  return [sec, min, hours, days];
}

var now = new Date();
var counter = separate_time(now);
document.getElementById('countdown').textContent = counter[3] + '時' + counter[2] + '時' + counter[1] + '分' + counter[0] + '秒';
