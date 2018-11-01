// JavaScript Document

var main = function() {
	
/*$("#filterFlower").on('click', function(){
	filter("flower");
		});

$("#filterTree").on('click', function(){
	filter("tree");
		});*/


	

function filter (tag) {
	prints.forEach(function(img){
	if($.inArray(tag, img.tags) >= 0){ //if tag is in array, fade in
		$("#" + img.title).fadeIn();
	} else {
		$("#" + img.title).fadeOut();// if not, fade out
	}		
	});
	
	websites.forEach(function(img){
	if($.inArray(tag, img.tags) >= 0){ //if tag is in array, fade in
		$("#" + img.title).fadeIn();
	} else {
		$("#" + img.title).fadeOut();// if not, fade out
	}
	});
	
	files.forEach(function(img){
	if($.inArray(tag, img.tags) >= 0){ //if tag is in array, fade in
		$("#" + img.title).fadeIn();
	} else {
		$("#" + img.title).fadeOut();// if not, fade out
	}
	});
	
	images.forEach(function(img){
	if($.inArray(tag, img.tags) >= 0){ //if tag is in array, fade in
		$("#" + img.title).fadeIn();
	} else {
		$("#" + img.title).fadeOut();// if not, fade out
	}
	});
	
	videos.forEach(function(img){
	if($.inArray(tag, img.tags) >= 0){ //if tag is in array, fade in
		$("#" + img.title).fadeIn();
	} else {
		$("#" + img.title).fadeOut();// if not, fade out
	}
	});
	
		/*other.forEach(function(img){
	if($.inArray(tag, img.tags) >= 0){ //if tag is in array, fade in
		$("#" + img.title).fadeIn();
	} else {
		$("#" + img.title).fadeOut();// if not, fade out
	}
	})*/
	
}
	$("aside ul li").addClass("filter");
		
	$(".filter").on('click', function(){
		filter(this.text);
		console.log(this.text);
	});
		
};
 $(document).ready(main);