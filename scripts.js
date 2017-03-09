var carouselList = $('#carousel ul');

$(function () {
	timer = setInterval(changeSlide, 5000);
});

function changeSlide () {
	carouselList.animate({'marginLeft':-500}, 1000, moveFirstSlide);
}

function moveFirstSlide() {
	var firstItem = carouselList.find('li:first')
	var lastItem = carouselList.find('li:last');
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
};

$('#nextSlide').click(function() {
	carouselList.animate({'marginLeft':-500}, 1000, moveFirstSlide);
	clearInterval(timer);
	timer = setInterval(changeSlide, 5000);
});

$('#prevSlide').click(function() {
	var firstItem = carouselList.find('li:first')
	var lastItem = carouselList.find('li:last');
	firstItem.before(lastItem);
	carouselList.css({marginLeft:-500});
	carouselList.animate({'marginLeft':0}, 1000);
	clearInterval(timer);
	timer = setInterval(changeSlide, 5000);
});