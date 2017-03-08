var carouselList = $('#carousel ul');

$(function () {
	var timer = setInterval(changeSlide, 5000);
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

$('#firstSlide').click(function() {
	carouselList.animate({'marginLeft':-500}, 1000, moveFirstSlide);
	clearInterval(timer);
	timer = setInterval('$("#firstSlide").click()', 5000);
});