// JavaScript Document
var main = function() {

//PHOTOS
	var ps1 = new ps("Bilingual","bilingual", "bilingual.png", "A photo of flowers taken in the Swiss Alps", ["comp"]);
	var ps2 = new ps("August", "august", "august.jpg", "Here are some lovely tulips", ["comp", "other"]);
	var ps3 = new ps("Facebook Cover", "fb_cover", "new_cover.jpg", "Some penguins", ["other"]);
	var ps4 = new ps("Canada Day","canada", "canada_day.png", "Majestic jellyfish", ["other"]);
	var ps5 = new ps("Retouching","wcrd", "wcrd_edit.jpg", "D'awwww so fluffy", ["retouch"]);

function ps(title, id, url, info, tags) {
	this.title = title;
	this.id = id;
	this.url = url;
	this.info = info;
	this.tags = tags;
}

var files = [ps1, ps2, ps3, ps4, ps5]; //ADD ALL NEW IMAGES HERE

function popMainGallery() {

$("#ps").empty();

files.forEach(function(ps){ //use img instead of specific name to get array items MAIN PAGE FUNCTION

	var $fig = $("<figure>"); //create figure for each
	$fig.attr("id", ps.id);

	var $img = $("<img>"); //image path
		$img.attr("src", "ps/" + ps.url).attr("class", "gallery_img");
		//$img.attr("id", ps.id);

	var $title = $("<figcaption>"); //figure caption as title
		$title.text(ps.title);
	
	var $li = $("<li>");

	$fig.append($img); //add image to figure element
	$fig.append($title); //add caption to figure element
	$("#ps").append($li.html($fig)); //add figures to gallery in li elements
	
		$fig.click(function (){
		var $id = this.id;
		window.location.href = "ps.html#" + $id;
	});
});
}
	
function popPsGallery () {
	
	$("#ps_gallery").empty();

files.forEach(function(file){ //use img instead of specific name to get array items INDIVIDUAL PAGE

	var $fig = $("<figure>"); //create div for each
		$fig.attr("class", "grid_gallery");
		$fig.attr("id", file.id);

	var $img = $("<img>"); //image path
		$img.attr("src", "ps/" + file.url);
	
	var $caption = $("<figcaption>").text(file.title);
	
	var $li = $("<li>");

	$fig.append($img);
	$fig.append($caption); //add caption to figure element
	$("#ps_gallery").append($li.html($fig)); //add figures to gallery in li elements
});
	
}
	
	//////////////////////////// FILTER////////////
	$("#retouch").click( function(){
		filter("retouch");
		$(this).css("color", "black");
		$(this).siblings("li").css("color", "lightcoral");
	});
	
	$("#comp").click( function(){
		filter("comp");
		$(this).css("color", "black");
		$(this).siblings("li").css("color", "lightcoral");
	});
	
	$("#other").click( function(){
		filter("other");
		$(this).css("color", "black");
		$(this).siblings("li").css("color", "lightcoral");
	});
	
	$("#all").click( function(){
		$(".grid_gallery").fadeIn();
		$(this).css("color", "black");
		$(this).siblings("li").css("color", "lightcoral");
	});
	
function filter (tag) {
	
	if ($(window).width() >= "500"){
		var $height = $(".grid").height();//only need to set height when over 500px;
		$(".grid").css("min-height", $height);//works for downsizing
	}else{
		$(".grid").css("min-height", "auto");
	}
	
	files.forEach(function(img){
	if($.inArray(tag, img.tags) >= 0){ //if tag is in array, fade in
		$("#" + img.id).fadeIn();
	} else {
		$("#" + img.id).fadeOut();// if not, fade out
	} 
	});
}

//////////////////////MODAL////////////////
	
function popModal(){$(".grid li").click(function(){
		openGalModal();

		$(".modal_info").empty();
		$(".large").empty();
		
		var $index = $(this).index();
		
		var $obj = files[$index];

		var $img = $("<img>");
		$img.attr("src", "ps/" + $obj.url);
	
		var $info = $("<p>").append($obj.info);
		var $title = $("<h2>").append($obj.title);
		
		$(".large").append($img);
		$(".modal_info").append($title).append($info);

	});}
	
var $overlay = $(".overlay");
var $gModal = $(".gallery_modal");
	
function openGalModal(){
$overlay.fadeIn();
$gModal.fadeIn();	
}	
		
popMainGallery();
popPsGallery();
popModal();
	
		function anchor (){
		var $anchor = window.location.hash; //OPEN MODAL ON MAIN PAGE CLICK
		$($anchor).click();
		console.log($anchor);}
	anchor();
	
};
 $(document).ready(main);