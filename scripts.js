var carouselList = $('#carousel ul');
var timer;
var slidesArray = carouselList.find('li').toArray();

$(function () {
	timer = setInterval(changeSlideForward, 5000);
});

$('.controlButtons button').click(function () {
	var activeButtonPosition = $('.controlButtons button.active').index();
	var clickedButtonPosition = $(this).index();
	console.log(activeButtonPosition,clickedButtonPosition);
	activeButton(this);

	if (clickedButtonPosition < activeButtonPosition) {
		var moves = activeButtonPosition - clickedButtonPosition;
		clearInterval(timer);

		for (var i = 0; i < moves; i++) {
			setTimeout(function () {
				changeSlideBackward(1000 / moves);
			}, i * 1000 / moves);
		}

		setTimeout(resetInterval, 1000);

	} else if (clickedButtonPosition > activeButtonPosition) {
		var moves = Math.abs(activeButtonPosition - clickedButtonPosition);
		clearInterval(timer);

		for (var i = 0; i < moves; i++) {
			setTimeout(function () {
				changeSlideForward(1000 / moves);
			}, i * 1000 / moves);
		}

		setTimeout(resetInterval, 1000);
	}
});

function changeSlideForward(interval) {
	interval = interval || 1000;
	carouselList.animate({'marginLeft':-500}, interval, moveFirstSlide);
};

function changeSlideBackward(interval) {
	interval = interval || 1000;
	var firstItem = carouselList.find('li:first');
	var lastItem = carouselList.find('li:last');
	firstItem.before(lastItem);
	//carouselList.css({marginLeft:-500});
	carouselList.animate({'marginLeft':0}, interval);
};

function moveFirstSlide() {
	var firstItem = carouselList.find('li:first')
	var lastItem = carouselList.find('li:last');
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
};

function resetInterval() {
	clearInterval(timer);
	timer = setInterval(changeSlideForward, 5000);
};

function nextActiveButton() {
	var activeButton = $('.active')
	var nextButton = activeButton.next();

	if (nextButton.length == 0)
	{
		nextButton = $('.controlButtons button').first();
	};
};

function prevActiveButton() {
	var activeButton = $('.active')
	var prevButton = activeButton.prev();

	if (prevButton.length == 0)
	{
		prevButton = $('.controlButtons button').last();
	};
};

$('#getNextSlide').click(function() {
	carouselList.animate({'marginLeft':-500}, 1000, moveFirstSlide);
	resetInterval();
});

$('#getPrevSlide').click(function() {
	var firstItem = carouselList.find('li:first')
	var lastItem = carouselList.find('li:last');
	firstItem.before(lastItem);
	carouselList.css({marginLeft:-500});
	carouselList.animate({'marginLeft':0}, 1000, prevActiveButton);
	resetInterval();
});

function activeButton(button) {
	$(button).addClass('active');
	$('button').not(button).removeClass('active');
};