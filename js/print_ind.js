// JavaScript Document
$(document).ready(function (){	
	

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
	
	var $height = $(".grid").height();
	$(".grid").css("height", $height);
	
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
	
function popModal(){$(".grid li figure").click(function(){
		openModal();

		$(".modal_info").empty();
		
		var $index = $(this).index();
		
		var $obj = prints[$index];

		
		var $info = $("<p>").append($obj.info);
		var $title = $("<h2>").append($obj.title);
		
		$(".large").css("background-image", "url(prints/" + $obj.url + ")");
		$(".modal_info").append($title).append($info);

	});}
		
var $overlay = $(".overlay");
var $modal = $(".modal");

$(".x").click(function(){closeModal();});
$($overlay).click(function(){closeModal();});	

function closeModal(){
$overlay.fadeOut();
$modal.fadeOut();
}
	
function openModal(){
$overlay.fadeIn();
$modal.fadeIn();	
}

	
popModal();	
});