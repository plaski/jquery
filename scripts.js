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

$('#getNextSlide').click(function() {
	carouselList.animate({'marginLeft':-500}, 1000, moveFirstSlide);
	clearInterval(timer);
	timer = setInterval(changeSlide, 5000);
});

$('#getPrevSlide').click(function() {
	var firstItem = carouselList.find('li:first')
	var lastItem = carouselList.find('li:last');
	firstItem.before(lastItem);
	carouselList.css({marginLeft:-500});
	carouselList.animate({'marginLeft':0}, 1000);
	clearInterval(timer);
	timer = setInterval(changeSlide, 5000);
});
$('#getFirstSlide').click(function() {
	var index = $('#firstSlide').index();
	console.log(index);
	carouselList.animate({'marginLeft':-500*index}, 500);
});
$('#getSecondSlide').click(function() {
	var index = $('#secondSlide').index();
	console.log(index);
	carouselList.animate({'marginLeft':-500*index}, 500);
	
});
$('#getThirdSlide').click(function() {
	var index = $('#thirdSlide').index();
	console.log(index);
	carouselList.animate({'marginLeft':-500*index}, 500);
});
$('#getFourthSlide').click(function() {
	var index = $('#fourthSlide').index();
	console.log(index);
	carouselList.animate({'marginLeft':-500*index}, 500);
});
$('#getFifthSlide').click(function() {
	var index = $('#fifthSlide').index();
	console.log(index);
	carouselList.animate({'marginLeft':-500*index}, 500);
})