$(document).ready(function(){
	//JSon + display
	//portfolio
	var portfolio = [{
		"picture":"images/projects/thumbs/iter_thumb.png",
		"title":"Iter mini robots contest",
		"tags":"NXT Mindstorm",
		"year":"2013",
		"link":"1"
	},
	{
		"picture":"images/projects/thumbs/tsi_thumb.png",
		"title":"Automatic Biathlon targets ",
		"tags":"Picaxe | App inventor | Electronics",
		"year":"2015",
		"link":"2"
	},
	{
		"picture":"images/projects/thumbs/isn_thumb.png",
		"title":"ISN section website",
		"tags":"Web | From scratch",
		"year":"2015",
		"link":"3"
	},
	{
		"picture":"images/projects/thumbs/the404_thumb.png",
		"title":"The404 Website",
		"tags":"Web | CMS | WordPress",
		"year":"2016",
		"link":"4"
	},
	{
		"picture":"images/projects/thumbs/tripadvisor_thumb.png",
		"title":"TripAdvisor Scrum",
		"tags":"Web | From scratch | PHP Object",
		"year":"2016",
		"link":"5"

	},
	{   
		"picture":"images/projects/thumbs/nina_thumb.png",
		"title":"Projet NINA (in progress)",
		"tags":"Debian | Daemon | AI | Scrapy",
		"year":"2017",
		"link":"6"
	}];
	for (var i=portfolio.length-1 ; i >=0 ; i--) {
		var id = portfolio[i]["link"];
		var project = $('<a/>', {
			id: id
		});
		var div = $('<div/>', {
			class: 'projects'
		});
		$('<img/>', {
				    id: "prj_img"+id,
				   	src: portfolio[i]["picture"]
		}).appendTo(div);
		var contender = $('<div />', {
			id: 'prj_contender'+id,
			class: 'proj_txt'
		});
		$('<span/>', {
		    id: "prj_title"+id,
		    class: "proj_title",
		   	text: portfolio[i]["title"]
		}).appendTo(contender);
		$('<br/>').appendTo(contender);
		$('<span/>', {
		    class: "proj_date",
		   	text: portfolio[i]["year"]
		}).appendTo(contender);
		$('<span/>', {
		    id: "prj_desc"+id,
		    class: "proj_desc",
		   	text: portfolio[i]["tags"]
		}).appendTo(contender);
		div.append(contender)
		project.append(div);
		$('#content_portfolio').append(project);
	}

	//skills-code
	//web
	var sk_code_web = [{
		"picture":"images/abilities/code_html.jpg",
		"title":"HTML5 / CSS3",
		"text":"Full integration of cross browser static webpages",
		"progression":70
	},
	{
		"picture":"images/abilities/code_php.jpg",
		"title":"PHP7 / MySql",
		"text":"Developpement of full websites with server side process and databases request (PDO),  MVC structure Backend for a dynamic layer over static pages",
		"progression":85
	},
	{
		"picture":"images/abilities/code_js.jpg",
		"title":"JavaScripts / JQuery / Ajax",
		"text":"Clientside process using JQuery library,  Knowledge in Ajax",
		"progression":65
	},
	{
		"picture":"images/abilities/code_wp.jpg",
		"title":"WordPress",
		"text":"CMS website developpement with the use of addons,  Creation of new visual themes",
		"progression":60
	}];
	append_sk_code(sk_code_web,'sk_code_web');

	//OOP
	var sk_code_oop = [{
		"picture":"images/abilities/code_cs.jpg",
		"title":"C# / SqlServer",
		"text":"C# object using LinQ library, Web Asp.net and Windows Forms, With requests to SqlServer databases",
		"progression":65
	},
	{
		"picture":"images/abilities/code_py.jpg",
		"title":"Python",
		"text":"Object and procedural, Scripts for windows and Linux, Embedding",
		"progression":50
	},
	{
		"picture":"images/abilities/code_cpp.jpg",
		"title":"C/C++",
		"text":"Procedural scripts Linux/Windows, Multithread programs, Embedding",
		"progression":45
	}];
	append_sk_code(sk_code_oop,'sk_code_oop');


	//db
	var sk_code_db = [{
		"picture":"images/abilities/code_pg.jpg",
		"title":"PostgresSql",
		"text":"Sql and PL/pgSql scripts, Web oriented usage",
		"progression":65
	},
	{
		"picture":"images/abilities/code_oracle.jpg",
		"title":"Oracle",
		"text":"Sql and PL/Sql scripts, Tables, Views, Triggers, Indexes, Functions, Procedures, Optimisation and Installation",
		"progression":85
	}];
	append_sk_code(sk_code_db,'sk_code_db');


	//languages
	var languages = [{
		"flag":"images/abilities/lg/France",
		"title":"French",
		"text":"Native"
	},
	{
		"flag":"images/abilities/lg/Uk",
		"title":"English",
		"text":"B2"
	},
	{
		"flag":"images/abilities/lg/Spain",
		"title":"Spanish",
		"text":"A2"
	},
	{
		"flag":"images/abilities/lg/Japan",
		"title":"Japanese",
		"text":"A1"
	}];
	for (var i=0 ; i<languages.length ; i++) {
		var language = $('<div />', {
			class: 'language'
		});

		$('<img />', {
			class: 'lg_flag',
			src: languages[i]["flag"]
		}).appendTo(language);

		$('<span />', {
			class: 'lg_title',
			text: languages[i]["title"]
		}).appendTo(language);

		$('<span />', {
			class: 'lg_txt',
			text: languages[i]["text"]
		}).appendTo(language);
		$('#languages_wrapper').append(language);
	}

	//side_act
	var side_acts = [{
		"title":"Arts",
		"text":"I'm both passionate about cinema and visual arts (see my DA and SC profiles below), I'm a huge fan of music too",
	},
	{
		"title":"Sports",
		"text":"Without being a huge fan of sport, i like to tone myself up from time to time. I quitted clubs, but i practice Running and Climbing by myself",
	},
	{
		"title":"Literature",
		"text":"I'm regularly writting press articles for the university newspaper <a href='https://issuu.com/journal-the404/docs'>The404</a>, I also like to write poems and short stories for myself",
	}];
	for (var i=0 ; i<side_acts.length ; i++) {
		var side_act = $('<div />', {
			class: 'side_act'
		});
		$('<span />', {
			class: 'sa_title',
			text: side_acts[i]["title"]
		}).appendTo(side_act);
		//$('<br />').appendTo(side_act);
		$('<span />', {
			class: 'sa_txt',
			html: side_acts[i]["text"]
		}).appendTo(side_act);

		$('#side_act_content').append(side_act);
	}
});


function append_sk_code (json,div) {
	for (var i=0 ; i<json.length ; i++) {
		var sk_code = $('<div />', {
			class: 'sk_code'
		});
		$('<img />', {
			class: 'sk_thumb',
			src: json[i]["picture"]
		}).appendTo(sk_code);

		var sk_text = $('<div />', {
			class: sk_text
		});
		$('<span />', {
			class: 'sk_title',
			text: json[i]["title"]
		}).appendTo(sk_text);

		$('<p />', {
			text: json[i]["text"]
		}).appendTo(sk_text);
		sk_code.append(sk_text);

		$('<br />').appendTo(sk_code);

		var candybar = $('<div />', {
			class: 'candybar blue glow'
		});
		$('<span />', {
			style: "width: "+json[i]["progression"]+"%",
			text: json[i]["progression"]+"/100"
		}).appendTo(candybar);
		sk_code.append(candybar);
		$('#'+div).append(sk_code);
	}
}