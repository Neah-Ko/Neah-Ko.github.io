$(document).ready(function(){
	//JSon + display
	var portfolio = [{
		"picture":"images/test_02.jpg",
		"title":"Iter mini robots contest",
		"tags":"NXT Mindstorm",
		"year":"2013",
		"link":"1"
	},
	{
		"picture":"images/test.jpg",
		"title":"Automatic Biathlon targets ",
		"tags":"Picaxe | App inventor | Electronics",
		"year":"2015",
		"link":"2"
	},
	{
		"picture":"images/test.jpg",
		"title":"ISN section website",
		"tags":"Web | From scratch",
		"year":"2015",
		"link":"3"
	},
	{
		"picture":"images/test.jpg",
		"title":"The404 Website",
		"tags":"Web | WordPress",
		"year":"2016",
		"link":"4"
	},
	{
		"picture":"images/test.jpg",
		"title":"Fnac",
		"tags":"Rich client | Windows Form | C#",
		"year":"2016",
		"link":"5"
	},
	{
		"picture":"images/test.jpg",
		"title":"TripAdvisor",
		"tags":"Web | From scratch | Object Oriented PHP",
		"year":"2016",
		"link":"6"

	},
	{   
		"picture":"images/test.jpg",
		"title":"Projet NINA (in progress)",
		"tags":"Debian | Daemon | AI | Scrapy",
		"year":"2017",
		"link":"7"
	}];
	for (var i=portfolio.length-1 ; i >=0 ; i--) {
		var id = portfolio[i]["link"];
		var idimg = "prj_img"+id;
		var idtitle = "prj_title"+id;
		var iddesc = "prj_desc"+id;
		var idcontender = "prj_contender"+id;
		var project = "<a id='"+id+"'><div class='projects'>";
		project += "<img id='"+idimg+"' src='"+portfolio[i]["picture"]+"'>";
		project += "<div id='"+idcontender+"' class='proj_txt'><span id='"+idtitle+"'' class='proj_title'>"+portfolio[i]["title"]+"</span><br>";
		project += "<span id='"+iddesc+"' class='proj_desc'>"+portfolio[i]["tags"]+"</span></div>";
		project += "</div></a>";
		$('#content_portfolio').append(project);
	}



	//Responsive menu
	$('nav a').on('click', function() {
		var scrollAnchor = $(this).attr('scroll-point'),
		scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;
		$('body,html').animate({
			scrollTop: scrollPoint
		}, 500);
		return false;
	})
	
	$(window).scroll(function() {
		var windscroll = $(window).scrollTop();
		if (windscroll >= $(window).height() * 0.9) {
			$('nav').addClass('fixed');
			$('body section').each(function(i) {
				if ($(this).offset().top <= windscroll + $(window).height() * 0.101) {
					$('nav li.active').removeClass('active');
					$('nav li').eq(i).addClass('active');
				}
			});
		} else {
			$('nav').removeClass('fixed');
			$('nav li.active').removeClass('active');
			$('nav li:first').addClass('active');
		}
	}).scroll();

	//hover on project
	$('#content_portfolio a img').each(function() {
		$(this).addClass('prj_img_onleave');
	});

	$('#content_portfolio a').on('mouseover', function () {
		var id = $(this).attr('id');

		$('#prj_img'+id).addClass('prj_img_onhover');
		$('#prj_contender'+id).addClass('prj_contender_onhover');
		$('#prj_title'+id).addClass('prj_txt_onhover');
		$('#prj_desc'+id).addClass('prj_txt_onhover');
		$('#prj_img'+id).removeClass('prj_img_onleave');

	});

	$('#content_portfolio a').on('mouseleave', function () {
		var id = $(this).attr('id');

		$('#prj_img'+id).addClass('prj_img_onleave');
		$('#prj_img'+id).removeClass('prj_img_onhover');
		$('#prj_contender'+id).removeClass('prj_contender_onhover');
		$('#prj_title'+id).removeClass('prj_txt_onhover');
		$('#prj_desc'+id).removeClass('prj_txt_onhover');
	});

	//

	$('#content_portfolio a').on('click', function() {
		showlightbox();
		console.log("coucou");
	});

	function showlightbox(){
		$('body').append("<div id='bg'></div>");
		$('body').css("overflow","hidden");
		$('#bg').append("<div id='close'>X</div>");
		$('#bg').append("loren ipsum sit dolor");
	}

	$('body').on("click",'#close', function () {
		hidelightbox();
	});

	$('body').keyup(function(event) {
		if(event.which == 27) {
			hidelightbox();
		}
	});

	function hidelightbox(){
		$('body').css("overflow","visible");
		$('div').remove('#bg');
	}
});


