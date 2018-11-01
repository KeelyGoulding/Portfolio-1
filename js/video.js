// JavaScript Document
var main = function() {

//VIDEOS
	var video4 = new video("Facebook Cover", "fb_cover", "A video cover image for Davidson and Williams LLP Facebook page. 2017.", "fb_cover.jpg", ["motion"]);
	var video3 = new video("Motion Design", "motion_design", "A study of motion design in the form of a movie title sequence. 2017.", "motion_des.jpg", ["color", "motion"]);
	var video2 = new video("Awesome Adventures Commercial", "aa_commercial", "A commercial for a local outdoor/scuba shop created as part of a university marketing project. 2015.", "aa_still.jpg", ["advertising", "cine"]);
	var video1 = new video("Colour Grading", "colour_grade", "Matched footage from different scenes, times, and locations through colour grading. 2017.", "colour_grade_still.jpg", ["cine", "colour"]);

function video(title, url, info, still, tags) {
	this.title = title;
	this.url = url; //NEED TO ADD FILE EXTs .ogg .webM
	this.info = info;
	this.still = still;
	this.tags = tags;
}

var videos = [video1, video2, video3, video4]; //ADD ALL NEW VIDEOS HERE
	
	function goToAnchor() {
		var hash = document.location.hash;
    if (hash !="") {
        setTimeout(function() {
            if (location.hash) {
                window.scrollTo(0, 0);
                window.location.href = hash;
				autoplay();
            }
        }, 1);
    }
    else {
        return false;
    }
	}

	function autoplay (){
		var videoid = location.hash;
		
		setTimeout(function(){
			$(videoid)[0].play();	
		}, 60);//working?
	}

function popMainGallery() {

$("#video").empty();

videos.forEach(function(video){ //use img instead of specific name to get array items MAIN PAGE FUNCTION

	var $fig = $("<figure>"); //create figure for each
	$fig.attr("id", video.url);

	var $img = $("<img>"); //image path
		$img.attr("src", "video/" + video.still).attr("class", "gallery_img");

	var $title = $("<figcaption>"); //figure caption as title
		$title.text(video.title);
	
	var $li = $("<li>");

	$fig.append($img); //add image to figure element
	$fig.append($title); //add caption to figure element
	$("#video").append($li.html($fig)); //add figures to gallery in li elements
	$fig.click(function (){
		var $id = this.id;
		window.location.href = "video.html#" + $id;
	});
});
}
	
function popVideoGallery () {
	
	$("#video_gallery").empty();

videos.forEach(function(video){ //use video instead of specific name to get array items INDIVIDUAL PAGE

	var $div_container = $("<div>"); //create div for each
		$div_container.attr("class", "stack_gallery");
		$div_container.append("<a name='" + video.url + "'></a>");

	var $vid = $("<video controls>");
		$vid.attr("id", video.url);
		
	var $source_mp4 = $("<source>");
		$source_mp4.attr("src", "video/" + video.url + ".mp4");
		$source_mp4.attr("type", "video/mp4");
	
	var $source_ogg = $("<source>");
		$source_ogg.attr("src", "video/" + video.url + ".ogg");
		$source_ogg.attr("type", "video/ogg");
	
	var $source_webM = $("<source>");
		$source_webM.attr("src", "video/" + video.url + ".webm");
		$source_webM.attr("type", "video/webm");
	
		$vid.append($source_mp4);
		$vid.append($source_ogg);
		$vid.append($source_webM);
		$vid.append("Your browser does not support the video tag.");
	
	var $img_container = $("<div>");
		$img_container.attr("class", "stack_container");
		$img_container.append($vid);
	
	var $info = $("<p>" + video.info + "</p>");

	var $title = $("<h3>" + video.title + "</h3>");

	$div_container.append($img_container); //add image to figure element
	$div_container.append($title);
	$div_container.append($info); //add caption to figure element
	$("#video_gallery").append($div_container); //add figures to gallery in li elements
goToAnchor();
	
});
}
//////////////////////FILTER/////////////////
/*	$("#cine").click( function(){
		filter("cine");
		$(this).css("color", "black");
		$(this).siblings("li").css("color", "lightcoral");
	});
	
	$("#color").click( function(){
		filter("color");
		$(this).css("color", "black");
		$(this).siblings("li").css("color", "lightcoral");
	});
	
	$("#motion").click( function(){
		filter("motion");
		$(this).css("color", "black");
		$(this).siblings("li").css("color", "lightcoral");
	});
	
	$("#all").click( function(){
		$(".stack_gallery").fadeIn();
		$(this).css("color", "black");
		$(this).siblings("li").css("color", "lightcoral");
	});
	
	function filter (tag) {
	
	//var $height = $(".grid").height();
	//$(".grid").css("height", $height);
	
	videos.forEach(function(video){
	if($.inArray(tag, video.tags) >= 0){ //if tag is in array, fade in
		$("#" + video.url).fadeIn();
	} else {
		$("#" + video.url).fadeOut();// if not, fade out
	} 
	});
}*/
	
	
popMainGallery();
popVideoGallery();

	
	
	
};
 $(document).ready(main);