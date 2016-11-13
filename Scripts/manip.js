$(document).ready(function(){
	//Responsive menu
	$('nav a').on('click', function() {
		var scrollAnchor = $(this).attr('scroll-point');
		if($(this).attr('scroll-point') == "my_projects" && $(window).scrollTop() > $('section[data-anchor="' + scrollAnchor + '"]').offset().top - $(window).height() * 0.09) {
			var scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top + 10;
		} else if ((($(this).attr('scroll-point') == "skills") || ($(this).attr('scroll-point') == "side_act")) && ($(window).scrollTop() < $('section[data-anchor="my_projects"]').offset().top - $(window).height() * 0.09)) {
			var scroll_stop = $('section[data-anchor="my_projects"]').offset().top - $(window).height() * 0.09;
			$('body,html').animate({
				scrollTop: scroll_stop
			}, 5);
			setTimeout(function() {
				scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - $(window).height() * 0.09;
			}, 30);
		} else {
			var scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - $(window).height() * 0.09;
		}
		setTimeout(function() {
			$('body,html').animate({
				scrollTop: scrollPoint
			}, 500);
		}, 100);
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

	//sendmail
	$('#button_contact').click(function(){
		$('#form_error').html("");
		$.ajax({
			type: 'POST',
			cache: false,
			url: 'scripts/mail.php',
			data: {
				name: $('#name').val(),
				email: $('#email').val(),
				subject: $('#subject').val(),
				message: $('#message').val()
			}, 
			success: function(msg) {
				if(msg == true) {
					var confirm = $('<span />', {
						class: 'confirm',
						text: 'Your message have been successfully sent'
					});
					$('#form_error').append(confirm);
					$('#contactForm').trigger("reset");
				} else {
					var error = $('<span />', {
						class: 'error',
						text: msg
					});
					$('#form_error').append(error);
				}
			}
		});
	});

	//auto expand textarea
	function adjust_textarea(h) {
		h.style.height = "20px";
		h.style.height = (h.scrollHeight)+"px";
	}


});