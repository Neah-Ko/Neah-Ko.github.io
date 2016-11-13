$(document).ready(function(){
	//Display projects

	$('#content_portfolio a').on('click', function() {
		showModal($(this).attr('id'));
	});

	$('body').on("click",'#close', function () {
		hideModal();
	});

	$('body').keyup(function(event) {
		if(event.which == 27) {
			if ($('#bg_lb').length){
				hideLightbox();
		    } else {
				hideModal();
		    }
		}
	});

	$('body').on("click",'.samp', function () {
		showLightbox($(this).attr('src'));
	});

	$('body').on("click",'#close_lb', function () {
		hideLightbox();
	});

});
function hideModal(){
	$('body').css("overflow","visible");
	$('div').remove('#bg');
}

function showModal(prj_id){
	var div_bg = $('<div />', {
		id: 'bg'
	});
	$('<div />', {
		id: 'close',
		text: 'X'
	}).appendTo(div_bg);

	$.ajax({
		type: 'POST',
		cache: false,
		url: "pages/projects/prj"+prj_id+".php",
		success: function(msg) {
			$('<div />', {
				class: 'wrapper',
				id: "prj"+prj_id,
				html: msg
			}).appendTo(div_bg);
		},
		error: function() {
			alert("Server Error");
		}
	});

	$('body').append(div_bg);
	$('body').css("overflow","hidden");
}

function showLightbox(url) {
	$('#bg').css("overflow","hidden");
	var div_bg_lb = $('<div />', {
		id: 'bg_lb'
	});

	var bg_img = $('<div />', {
		id: 'bg_img'
	});
	
	$('<img />', {
		class: 'img_lb',
		src: url
	}).appendTo(bg_img);

	$('<div />', {
		id: 'close_lb',
		text: 'X'
	}).appendTo(bg_img);

	div_bg_lb.append(bg_img);

	$('#bg').append(div_bg_lb);
}

function hideLightbox() {
	$('#bg').css("overflow","visible");
	$('div').remove('#bg_lb');
}