var carouselList = $('#carousel ul');

$(function () {
	setInterval(changeSlide, 5000);
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