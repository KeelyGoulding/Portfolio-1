// JavaScript Document 
// *************When in script, paths are relative to displayed page******************

var main = function() {

//PHOTOS
	var img1 = new image("Flowers", "flowers", "flowers.jpg", "A photo of flowers taken in the Swiss Alps", ["nature", "film"]);
	var img2 = new image("Snowbirds", "snowbirds", "snowbirds.jpg", "The Snowbirds. Taken at Lethbridge's International Airshow 2017.", ["man"]); //man = "Man Made"
	var img3 = new image("Plane", "plane1", "plane1.jpg", "A plane flying by at Airshow 2017.", ["man"]);
	var img4 = new image("Plane 2", "plane2", "plane2.jpg", "A fly-by of a plane", ["man"]);

function image(title, id, url, info, tags) {
	this.title = title;
	this.id = id;
	this.url = url;
	this.info = info;
	this.tags = tags;
}

var images = [img1, img2, img3, img4]; //ADD ALL NEW IMAGES HERE

function popMainGallery() {

$("#photography").empty();

images.forEach(function(img){ //use img instead of specific name to get array items  MAIN PAGE FUNCTION

	var $fig = $("<figure>"); //create figure for each
	$fig.attr("id", img.id);

	var $img = $("<img>"); //image path
		$img.attr("src", "images/" + img.url).attr("class", "gallery_img");

	var $title = $("<figcaption>"); //figure caption as title
		$title.text(img.title);
	
	var $li = $("<li>");

	$fig.append($img); //add image to figure element
	$fig.append($title); //add caption to figure element
	$("#photography").append($li.html($fig)); //add figures to gallery in li elements
	
	$fig.click(function (){
		var $id = this.id;
		window.location.href = "photo.html#" + $id;
	});
});
}
	
function popPhotoGallery (){
	
	$("#photo_gallery").empty();

images.forEach(function(img){ //use img instead of specific name to get array items PHOTOGRAPHY PAGE

	var $fig = $("<figure>"); //create figure for each
		$fig.attr("class", "grid_gallery");
		$fig.attr("id", img.id);		

	var $img = $("<img>"); //image path
		$img.attr("src", "images/" + img.url);
	
	var $caption = $("<figcaption>").text(img.title);
	
	var $li = $("<li>");

	$fig.append($img); //add image to figure element
	$fig.append($caption); //add caption to figure element
	$("#photo_gallery").append($li.html($fig)); //add figures to gallery in li elements
});
	
}
	
//////////////////////////// FILTER////////////
	$("#film").click( function(){
		filter("film");
		$(this).css("color", "black");
		$(this).siblings("li").css("color", "lightcoral");
	});
	
	$("#arch").click( function(){
		filter("architecture");
		$(this).css("color", "black");
		$(this).siblings("li").css("color", "lightcoral");
	});
	
	$("#nature").click( function(){
		filter("nature");
		$(this).css("color", "black");
		$(this).siblings("li").css("color", "lightcoral");
	});
	
	$("#man").click( function(){
		filter("man");
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
	
	images.forEach(function(img){
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
		
		var $obj = images[$index];

		var $img = $("<img>");
		$img.attr("src", "images/" + $obj.url);	
	
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
popPhotoGallery();
popModal();
	
	function anchor (){
		var $anchor = window.location.hash; //OPEN MODAL ON MAIN PAGE CLICK
		$($anchor).click();
		console.log($anchor);}
	anchor();
	
};
 $(document).ready(main);