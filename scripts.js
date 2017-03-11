var carouselList = $('#carousel ul');

$(function () {
	timer = setInterval(changeSlide, 5000);
});

function changeSlide() {
	carouselList.animate({'marginLeft':-500}, 1000, moveFirstSlide);
};

function moveFirstSlide() {
	var firstItem = carouselList.find('li:first')
	var lastItem = carouselList.find('li:last');
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
	nextActiveButton();
};

function resetInterval() {
	clearInterval(timer);
	timer = setInterval(changeSlide, 5000);
};

function nextActiveButton() {
	var activeButton = $('.active')
	var nextButton = activeButton.next();

	if (nextButton.length == 0)
	{
		nextButton = $('.controlButtons button').first();
	};

	activeButton.removeClass('active');
	nextButton.addClass('active');
};

function prevActiveButton() {
	var activeButton = $('.active')
	var prevButton = activeButton.prev();

	if (prevButton.length == 0)
	{
		prevButton = $('.controlButtons button').last();
	};

	activeButton.removeClass('active');
	prevButton.addClass('active');
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

$('#getFirstSlide').click(function() {
	var index = $('#firstSlide').index();
	carouselList.animate({'marginLeft':-500*index}, 500);
	activeButton('#getFirstSlide');

});
$('#getSecondSlide').click(function() {
	var index = $('#secondSlide').index();
	carouselList.animate({'marginLeft':-500*index}, 500);
	activeButton('#getSecondSlide');
});
$('#getThirdSlide').click(function() {
	var index = $('#thirdSlide').index()
	carouselList.animate({'marginLeft':-500*index}, 500);
	activeButton('#getThirdSlide');
});
$('#getFourthSlide').click(function() {
	var index = $('#fourthSlide').index();
	carouselList.animate({'marginLeft':-500*index}, 500);
	activeButton('#getFourthSlide');
});
$('#getFifthSlide').click(function() {
	var index = $('#fifthSlide').index();
	carouselList.animate({'marginLeft':-500*index}, 500);
	activeButton('#getFifthSlide');
});