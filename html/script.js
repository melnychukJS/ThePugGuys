document.addEventListener("DOMContentLoaded", function(){
	var ctx = document.getElementById("myChart").getContext("2d");
	var data = {
		labels: ["12:34","13:21","14:34","16:01","16:23"],
		datasets: [
			{
				label: "Spendings",
				fillColor: "#299c97",
				strokeColor: "#f5f5f5",
		        pointColor: "#066c68",
		        pointStrokeColor: "#fff",
		        pointHighlightFill: "#fff",
		        pointHighlightStroke: "rgba(220,220,220,1)",
		        data: [0.1, 1.5, 0.3, 0.3, 10]
			}
		]
	}
	var myLineChart = new Chart(ctx).Line(data);
});
