// JavaScript Document
var main = function() {

//PHOTOS
	var ps1 = new ps("Bilingual", "bilingual.png", "A photo of flowers taken in the Swiss Alps");
	var ps2 = new ps("August", "august.jpg", "Here are some lovely tulips");
	var ps3 = new ps("Facebook Cover", "new_cover.jpg", "Some penguins");
	var ps4 = new ps("Canada Day", "canada_day.png", "Majestic jellyfish");
	var ps5 = new ps("Retouching", "wcrd_edit.jpg", "D'awwww so fluffy");

function ps(title, url, info) {
	this.title = title;
	this.url = url;
	this.info = info;
}

var files = [ps1, ps2, ps3, ps4, ps5]; //ADD ALL NEW IMAGES HERE

function popMainGallery() {

$("#other").empty();

files.forEach(function(ps){ //use img instead of specific name to get array items MAIN PAGE FUNCTION

	var $fig = $("<figure>"); //create figure for each
	//$fig.attr("id", img.title);

	var $img = $("<img>"); //image path
		$img.attr("src", "ps/" + ps.url).attr("class", "gallery_img");

	var $title = $("<figcaption>"); //figure caption as title
		$title.text(ps.title);
	
	var $li = $("<li>");

	$fig.append($img); //add image to figure element
	$fig.append($title); //add caption to figure element
	$("#other").append($li.html($fig)); //add figures to gallery in li elements
});
}
	
function popOtherGallery () {
	
	$("#other_gallery").empty();

files.forEach(function(file){ //use img instead of specific name to get array items INDIVIDUAL PAGE

	var $fig = $("<figure>"); //create div for each
		$fig.attr("class", "grid_gallery");

	var $img = $("<img>"); //image path
		$img.attr("src", "ps/" + file.url);
	
	
	//var $h3 = $("<h3>");
	var $info = $("<p>" + file.info + "</p>");
	
	var $caption = $("<figcaption>"); //figure caption
		$caption.html("<h3>" + file.title + "</h3>").append($info);
	
	var $li = $("<li>");

	$fig.append($img);
	$fig.append($caption); //add caption to figure element
	$("#other_gallery").append($li.html($fig)); //add figures to gallery in li elements
});
	
}

popMainGallery();
popOtherGallery();

	
	
	
};
 $(document).ready(main);