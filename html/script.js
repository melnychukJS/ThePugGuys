$( document ).ready(function() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myLineChart = new Chart(ctx).PolarArea(data);
});
