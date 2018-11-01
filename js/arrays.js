// JavaScript Document 
// *************When in script, paths are relative to displayed page******************

var main = function() {

//PHOTOS
	var img1 = new image("Flowers", "flowers.jpg", "A photo of flowers taken in the Swiss Alps");
	var img2 = new image("Tulips", "tulips.jpg", "Here are some lovely tulips");
	var img3 = new image("Penguins", "penguins.jpg", "Some penguins");
	var img4 = new image("Jellyfish", "jellyfish.jpg", "Majestic jellyfish");
	var img5 = new image("Koala", "koala.jpg", "D'awwww so fluffy");

function image(title, url, info) {
	this.title = title;
	this.url = url;
	this.info = info;
}

var images = [img1, img2, img3, img4, img5]; //ADD ALL NEW IMAGES HERE

function popMainGallery() {

$("#photography").empty();

images.forEach(function(img){ //use img instead of specific name to get array items  MAIN PAGE FUNCTION

	var $fig = $("<figure>"); //create figure for each
	//$fig.attr("id", img.title);

	var $img = $("<img>"); //image path
		$img.attr("src", "images/" + img.url).attr("class", "gallery_img");

	var $title = $("<figcaption>"); //figure caption as title
		$title.text(img.title);
	
	var $li = $("<li>");

	$fig.append($img); //add image to figure element
	$fig.append($title); //add caption to figure element
	$("#photography").append($li.html($fig)); //add figures to gallery in li elements

});
}
	
function popPhotoGallery (){
	
	$("#photo_gallery").empty();

images.forEach(function(img){ //use img instead of specific name to get array items PHOTOGRAPHY PAGE

	var $fig = $("<figure>"); //create figure for each
		$fig.attr("class", "photo_gallery");

	var $img = $("<img>"); //image path
		$img.attr("src", "images/" + img.url);
	
	//var $h3 = $("<h3>");
	var $info = $("<p>" + img.info + "</p>");

	var $caption = $("<figcaption>"); //figure caption
		$caption.html("<h3>" + img.title + "</h3>").append($info);
	
	var $li = $("<li>");

	$fig.append($img); //add image to figure element
	$fig.append($caption); //add caption to figure element
	$("#photo_gallery").append($li.html($fig)); //add figures to gallery in li elements

});
	
}

popMainGallery();
popPhotoGallery();	
	
};
 $(document).ready(main);