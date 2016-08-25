var window_half_size = $(window).height() / 2; // 화면 크기의 절반.
var showed_nav; // 현재 보여지고 있는 네비게이터가 뭔지 (전체/최소화)
var skills_active = false; // 보유기술이 클릭되어 애니메이션이 실행중일 때 참
var career_clicked = false;

$(document).ready(function() {
	// 아래의 
	jQuery.Animation.prefilter(function(element, properties, options) {
		if (options.overrideOverflow) {
			jQuery(element).css("overflow", options.overrideOverflow);
		}
	});
	set_events();
})

// 이벤트 리스너 부착
var set_events = function() {
	// 현재 네비게이터 지정
	showed_nav = $('#navigator');

	// 윈도우 크기 변경 감지 -> window_half_size 갱신
	$(window).resize(function() {
		window_half_size = $(window).height() / 2;
		var window_width = $(window).width();
		if (window_width < 740) {
			alert('이 사이트는 넓이 740px 이상의 환경에서 동작합니다.');
		}
	});

	// 윈도우 스크롤시 네비게이터가 따라가도록
	$(window).scroll(function() {
		if (showed_nav.is(':animated')) {
			showed_nav.stop(true, false);
		}
		showed_nav.animate({
			top : window_half_size + $(window).scrollTop()
		}, 700);
	});

	// 네비게이터를 클릭하면 해당 페이지로 부드럽게 이동
	$('#navigator > ul > li').bind('click', function () {
		var clicked_id = $(this).attr('data-destination');
		$('html, body').animate({scrollTop: $('#' + clicked_id).offset().top}, 1500, 'easeInOutQuart');
	});

	// 네비게이터 숨기기
	$('#navigator-hide').click(function() {
		$('#navigator-show').css('top', window_half_size + $(window).scrollTop());
		$('#navigator').toggle({effect: 'slide', direction: 'right'});
		if ($('#navigator-show').css('display') == 'none') {
			$('#navigator-show').toggle({effect: 'slide', direction: 'right'});
		}
		showed_nav = $('#navigator-show');
		showed_nav.css('scrollTop', window_half_size + $(window).scrollTop())
	});

	// 네비게이터 보이기
	$('#navigator-show').click(function() {
		$('#navigator').css('top', window_half_size + $(window).scrollTop());
		$('#navigator-show').toggle({effect: 'slide', direction: 'right'});
		if ($('#navigator').css('display') == 'none') {
			$('#navigator').toggle({effect: 'slide', direction: 'right'});
		}
		showed_nav = $('#navigator');
	});

	$.each(Detail.skills, function (index, data) {
		$('#skill-list').append($('<li>').text(data));
	});

	// 프로젝트 내용 수평 슬라이드 효과
	$('.project-move-btn:eq(0)').click(function () {
		$('#projects').animate({scrollLeft: '-=200'});
	});
	$('.project-move-btn:eq(1)').click(function () {
		$('#projects').animate({scrollLeft: '+=200'});
	});

	// 보유 기술 상세히 보여주기
	dispatch_detail('system'); // 처음에 system을 포커스
	$('#skills > ul#skill-keyword > li').bind('click', function() {
		if ($('#skills > ul#skill-keyword > li.detail')[0] == $(this)[0] || $(this).is(':animated')) {
			return;
		}

		// 현재 애니메이션 동작중인 모든 li에 대해서 애니메이션을 중지 시키고 포커스를 제거
		// 시키는 과정. 
		var animated = $('#skills > ul#skill-keyword > li:animated');
		animated.stop(false, false);
		animated.animate({width: 100, backgroundColor: '#bdaf44'},
			{duration: 500, overrideOverflow: 'visible', done: function() {
				$(this).removeAttr('style');
			}}
		);
		animated.removeClass('detail');

		$('#skills > ul#skill-keyword > li.detail').removeClass('detail', {duration: 500, overrideOverflow: 'visible'});
		$(this).animate({width: $(window).width() - 440, backgroundColor: '#FFE830'}, {duration: 500, overrideOverflow: 'visible', done: function() {
			$(this).addClass('detail');
			$(this).removeAttr('style');
		}});
		
		dispatch_detail($(this).attr('data-detail'));
		
	});

	// 프로젝트 상세히 닫기
	$('#details > div#project-detail-wrapper').click(function (event) {
		if (event.target === this) {
			$(this).addClass('hide');
		}
	});

	// 커리어에서 해당 연도 마우스 오버시
	$('#year-bar > li').bind('mouseover', function () {
		career_clicked = false;
		var pos = $(this).offset();
		var detail = $('div#career-detail');
		var year = $(this).text();
		detail.css({top: pos.top + 60, left: pos.left + 15});
		detail.html(Career_detail[year]);
		detail.removeClass('hide');
	});
	$('#year-bar > li').bind('click', function () {
		career_clicked = true;
	})
	$('#year-bar > li').bind('mouseleave', function () {
		if (!career_clicked) {
			$('div#career-detail').addClass('hide');
		}
	})

	// 이메일 보내기
	// 메일 선택
	$('#send-mail > div > div > ul > li > a').click(function () {
		var email = $(this).text();
		if (email == "직접입력") {

		}
		$('#send-mail > div > div > button').text($(this).text());
		$('#send-mail > div > div').removeClass('open');
		return false;
	});
	// 메일 보내기
	$('#send-mail > button').click(function () {
		$('#send-mail > button').prop('disabled', true);
		$('#send-mail > button > span').addClass('hide');
		$('#send-mail > button > img').removeClass('hide');
		$.ajax({
			method: 'post',
			url: 'http://kostrian.xyz:8038/send_mail',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8", 
			data: $('#send-mail').serialize(),
			success: function (data) {
				console.log(data);
				alert('메일을 성공적으로 발송하였습니다.');
			},
			error: function (data) {
				alert('메일 보내기에 실패하였습니다. 이 에러가 계속 되면 kimmin0806@gmail.com으로 직접 보내주세요!');
			}
		}).always(function () {
			$('#send-mail > button > span').removeClass('hide');
			$('#send-mail > button > img').addClass('hide');
			$('#send-mail > button').prop('disabled', false);
		});
		return false;
	});
}

// 보유기술 클릭시 보유기술 디테일 뿌리기
var dispatch_detail = function (detail) {
	var projects = Detail[detail];

	// 보유 기술의 수준을 보여줄 progress bar
	$('#skill-level > div').css('width', projects['level'] + '%');
	$('#skill-level').attr('aria-valuenoe', projects['level']);

	// 프로젝트 및 공부 내용들 바꾸기
	$('#projects').empty();
	$.each(projects['projects'], function(index, value) {
		var pic = (value['pic'] === '' ? 'code.svg' : value[pic]);
		var inner = $('<li>');
		var img = $('<img src="image/proj/' + pic + '" width="100" alt="' + pic + '">');
		inner.html($('<div class="detail-pic">').html(img));
		inner.append($('<p>').html(value['title']));
		$('#projects').append(inner);
	});
	// 프로젝트 상세히
	$('#projects > li').click(dispatch_project);
}

// 프로젝트 클릭시 프로젝트 디테일 뿌리기
var dispatch_project = function () {
	var project = find_project_by_title($(this).children().eq(1).html());
	$('#details > div#project-detail-wrapper > div#project-detail > h3').html(project.title);
	$('#details > div#project-detail-wrapper > div#project-detail > p').html(project.description);
	$('#details > div#project-detail-wrapper').removeClass('hide');
}

// 프로젝트 타이틀 가지고 프로젝트 객체 가져오기
var find_project_by_title = function (title) {
	var selected = $('#skills > ul > li.detail').attr('data-detail');
	var projects = Detail[selected].projects;
	for (var i = 0; i < projects.length; ++i) {
		if (projects[i].title == title) {
			return projects[i];
		}
	}

	return "";
}