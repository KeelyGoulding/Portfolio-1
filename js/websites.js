// JavaScript Document
var main = function() {

//Websites // Need to find a better way to link
	var site1 = new web("Davidson & Williams LLP", "dw", "home.jpg", "A website redesign for Davidson & Williams LLP, a law firm in Lethbridge, AB. 2017. <br><a href='http://dwlaw.pro/' target='_blank'>Click Here</a>");
	var site2 = new web("Critically Endangered Cats", "crit_cat", "critical_cats.jpg", "An informational website about critically endangered wildcats. 2016 <br><a href='http://www.criticallyendangeredcats.dx.am/' target='_blank'>Click Here</a>");

function web(title, id, url, info) {
	this.title = title;
	this.id = id;
	this.url = url;
	this.info = info;
}

var websites = [site1, site2]; //ADD ALL NEW IMAGES HERE

	function goToAnchor() { 
    var hash = document.location.hash;
    if (hash !="") {
        setTimeout(function() {
            if (location.hash) {
                window.scrollTo(0, 0);
                window.location.href = hash;
            }
        }, 1);
    }
    else {
        return false;
    }
	}
	
function popMainGallery() {

$("#web").empty();

websites.forEach(function(web){ //use img instead of specific name to get array items MAIN PAGE FUNCTION

	var $fig = $("<figure>"); //create figure for each
	$fig.attr("id", web.id);

	var $img = $("<img>"); //image path
		$img.attr("src", "websites/" + web.url).attr("class", "gallery_img");

	var $title = $("<figcaption>"); //figure caption as title
		$title.text(web.title);
	
	var $li = $("<li>");

	$fig.append($img); //add image to figure element
	$fig.append($title); //add caption to figure element
	$("#web").append($li.html($fig)); //add figures to gallery in li elements
		
	$fig.click(function (){
		var $id = this.id;
		window.location.href = "web.html#" + $id;
	});
});
}
	
function popWebGallery () {
	
	$("#web_gallery").empty();

websites.forEach(function(img){ //use img instead of specific name to get array items INDIVIDUAL PAGE

	var $div_container = $("<div>"); //create div for each
		$div_container.attr("class", "stack_gallery");
		$div_container.attr("id", img.id);
	
		$div_container.append("<a name='" + img.id + "'></a>");

	var $img = $("<img>"); //image path
		$img.attr("src", "websites/" + img.url);
	
	var $img_container = $("<div>");
		$img_container.attr("class", "web_container");
		$img_container.html($img);
	
	var $info = $("<p>" + img.info + "</p>");

	var $title = $("<h3>" + img.title + "</h3>");

	$div_container.append($img_container); //add image to figure element
	$div_container.append($title);
	$div_container.append($info); //add caption to figure element
	$("#web_gallery").append($div_container); //add figures to gallery in li elements
goToAnchor();
});
	
}

popMainGallery();
popWebGallery();
	


/*var $anchor = window.location.hash; //OPEN MODAL ON MAIN PAGE CLICK
	var $name = $anchor.slice(1);
	$.scrollTo($anchor, 500);*/
	//console.log($name);

	
};
 $(document).ready(main);