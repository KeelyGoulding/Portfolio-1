// JavaScript Document 
// *************When in script, paths are relative to displayed page******************
var main = function() {
	
//PHOTOS
	var print1 = new print("Party Invite","invite", "invite.png", false, "An invite created for a staff party at a Lethbridge Bulls baseball game. 2017.", ["fun"]);
	var print2 = new print("Hutterite Atlas Ad", "atlas", "atlas_ad.jpg",false, "An advertisement created for Davidson & Williams LLP to go in the Hutterite Atlas. 2017.", ["advertising"]);
	var print3 = new print("University Calendar Ad", "calendar", "calendar_ad.jpg", false, "An ad featured in the University of Lethbridge Student Union 2017/2018 calendar.", ["advertising"]);
	//var print4 = new print("Photo Essay", "ph_essay", "photo_essay_2016.pdf", true, "A Photo Essay about the arrival of Spring. All photos were taken on black and white film and then processed digitally.", ["print", "fun"]);
	var print5 = new print("Newspaper Announcement", "paper", "newspaper.jpg", false, "A newspaper announcement for a new lawyer at Davidson & Williams LLP. 2017.", ["advertising"]);
	var print6 = new print("Permanent Residency Data Visualization", "perm_res", "perm_res_2014.jpg", false, "A rose graph representing permanent residency in Canada 2012-2013. Year: 2014.", ["print", "dataVis"]);

function print(title, id, url, pdf, info, tags) {
	this.title = title;
	this.id = id;
	this.url = url;
	this.pdf = pdf;
	this.info = info;
	this.tags = tags;
}

var prints = [print1, print2, print3, print6, print5]; //ADD ALL NEW IMAGES HERE

function popMainGallery() {

$("#print").empty();

prints.forEach(function(print){ //use print instead of specific name to get array items  MAIN PAGE FUNCTION
	
	var $fig = $("<figure>"); //create figure for each;
		$fig.attr("id", print.id);
	
	var $img = $("<img>"); //image path
		$img.attr("src", "prints/" + print.url).attr("class", "gallery_img");

	var $title = $("<figcaption>"); //figure caption as title
		$title.text(print.title);
	
	var $li = $("<li>");

	$fig.append($img); //add image to figure element
	$fig.append($title);//add caption to figure element
	$("#print").append($li.html($fig)); //add figures to gallery in li elements
	
	$fig.click(function (){
		var $id = this.id;
		window.location.href = "print.html#" + $id;
	});
});
}
	
function popPrintGallery (){		//////////GRID GALLERY////////////////////////////////
	
	$("#print_gallery").empty();

prints.forEach(function(print){

	var $fig = $("<figure>"); //create figure for each
		$fig.attr("class", "grid_gallery");
		$fig.attr("id", print.id);
	
	var $img = $("<img>"); //image path
		$img.attr("src", "prints/" + print.url);

	var $caption = $("<figcaption>").text(print.title); //figure caption
	
	var $li = $("<li>");

	$fig.append($img); //add image to figure element
	$fig.append($caption); //add caption to figure element
	$("#print_gallery").append($li.html($fig)); //add figures to gallery in li elements

});
	
}
	
//////////////////////////// FILTER////////////
	$("#dataVis").click( function(){
		filter("dataVis");
		$(this).css("color", "black");
		$(this).siblings("li").css("color", "lightcoral");
	});
	
	$("#fun").click( function(){
		filter("fun");
		$(this).css("color", "black");
		$(this).siblings("li").css("color", "lightcoral");
	});
	
	$("#advertising").click( function(){
		filter("advertising");
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
	
	prints.forEach(function(img){
	if($.inArray(tag, img.tags) >= 0){ //if tag is in array, fade in
		$("#" + img.id).fadeIn();
	} else {
		$("#" + img.id).fadeOut();// if not, fade out
	} 
	});
}

////////////MODAL//////////////////
	
/*function popModalGallery (){
	$(".small_img_container ul").empty();
	
	prints.forEach(function(print){
		var $li = $("<li>");
		var $img = $("<img>"); //image path
		$img.attr("src", "prints/" + print.url);
			var $index = prints.indexOf(print) + 1;
		$img.attr("onclick", "currentSlide(" + $index + ")");
		
		$li.append($img);
		
		$(".small_img_container ul").append($li);
	
});
		
	}
	
popModalGallery();	*/
	
function popModal(){$(".grid li").click(function(){ 
		openGalModal();

		$(".modal_info").empty();
		$(".large").empty();
		
		var $index = $(this).index();
		
		var $obj = prints[$index];
		
		//if ($obj.pdf === false)	{	
			var $img = $("<img>");
				$img.attr("src", "prints/" + $obj.url);
				$(".large").append($img);
		/*}else {
			var object = $("<object>");
			var embed = $("<embed>");
			
			embed.attr({src: $obj.url,
						type:"application/pdf"});
			object.append(embed);
			$(".large").append(object);
		}*/
		
		var $info = $("<p>").append($obj.info);
		var $title = $("<h2>").append($obj.title);
		
			
		$(".modal_info").append($title).append($info);

	});}
		
var $overlay = $(".overlay");
var $gModal = $(".gallery_modal");
	
function openGalModal(){
$overlay.fadeIn();
$gModal.fadeIn();	
}
	
/*function showSlides(n) {
	$this(function(print){
	  var $img = $("<img>");
		var $info = $("<p>").append(print.info);
		var $title = $("<h2>").append(print.title);
		
		var i;
		
	  var slides = $img.attr("src", "prints/" + print.url);//inside .large
		$(".large").append(slides);
		
	  var captionText = $title.after($info); 
		$(".modal_info").append(captionText);
		
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	  }
	  for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	  }
	 slides[slideIndex-1].style.display = "inline-block";
	  dots[slideIndex-1].className += " active";
	 captionText.innerHTML = dots[slideIndex-1].alt;
	});
}	*/
	
popMainGallery();
popPrintGallery();
popModal();	

	function anchor (){
		var $anchor = window.location.hash; //OPEN MODAL ON MAIN PAGE CLICK
		$($anchor).click();
		console.log($anchor);}
	anchor();

};
 $(document).ready(main);