// JavaScript Document
$(document).ready(function(){
	
	var $overlay = $(".overlay");
	var $modal = $(".modal");
	
	$(".x").click(function(){closeModal();});
	$($overlay).click(function(){closeModal();});	
	
	function closeModal(){
		$overlay.fadeOut();
		$modal.fadeOut();
	}
	
	//contact fade in
	$(".ftr_contact").click(function(){
		$(".overlay, #contact").fadeIn();
	});
	
	//HIDE SCROLLBAR
/*	var contact = $("contact");
	contact.style.paddingRight = contact.offsetWidth - contact.clientWidth + "px";
	$modal.style.paddingRight = $modal.offsetWidth - $modal.clientWidth + "px";*/
	
	//contact validate
	$("form [name='contact']").submit(function(){
		if ($("input:required") !== ''){
			$(".validate_msg").show();
			return false;
		}else{
			(".validate_msg").display("none");
		}
	});
	
	//DROP DOWN
	$("#menu").click(function(){
		$("#drop_down").slideToggle();
	});

	
});