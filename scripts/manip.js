$(document).ready(function(){
	var portfolio = [{
		"picture":"images/test_02.jpg",
		"title":"Iter mini robots",
		"tags":"NXT Mindstorm",
		"year":"2013",
		"link":"1"
	},
	{
		"picture":"images/test.jpg",
		"title":"Automatic Biathlon targets ",
		"tags":"Picaxe | App inventor",
		"year":"2015",
		"link":"2"
	},
	{
		"picture":"images/test.jpg",
		"title":"ISN section website",
		"tags":"From scratch | Web",
		"year":"2015",
		"link":"3"
	},
	{
		"picture":"images/test.jpg",
		"title":"The404 Website",
		"tags":"WordPress | Web",
		"year":"2016",
		"link":"4"
	},
	{
		"picture":"images/test.jpg",
		"title":"TripAdvisor",
		"tags":"From scratch | Web",
		"year":"2016",
		"link":"5"

	},
	{   
		"picture":"images/test.jpg",
		"title":"Projet Nina",
		"tags":"Debian | Daemon",
		"year":"2017",
		"link":"6"
	}];
	for (var i=portfolio.length-1 ; i >=0 ; i--) {

		var idproject = "project"+portfolio[i]["link"];
		var project = "<a href='index.php?page="+portfolio[i]["link"]+"'><div class='projects' id='"+idproject+"'>";
		project += "<img src='"+portfolio[i]["picture"]+"'>";
		project += "<h3>"+portfolio[i]["title"]+"</h3>";
		project += "<h4>"+portfolio[i]["tags"]+"</h4>";
		project += "</div></a>";
		$('#content_portfolio').append(project);
	}
});


