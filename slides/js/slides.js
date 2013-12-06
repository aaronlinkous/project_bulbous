(function(_slides, $, undefined ) {
	_slides.current = 0;

	_slides.change_slide = function(dir) {
		console.log(dir);
		switch(dir) {
			case "next":
				if(current < num) {
					current++;
					$(".active").removeClass("active viewed no_transition").addClass("viewed");
					$(".slide:eq("+current+")").addClass("active");
				}
				break;
			case "prev":
				if(current > 0) {
					current--;
					$(".active").removeClass("active viewed no_transition");
					$(".slide:eq("+current+")").removeClass("viewed").addClass("active no_transition");
				}
				break;
			case "up":
				break;
			case "down":
				break;
			default:
				current = dir;
				$(".slide").removeClass("active viewed no_transition").each(function(){
					if($(this).attr("data-slide") < dir) {
						$(this).addClass("viewed");
					} else if($(this).attr("data-slide") == dir) {
						$(this).addClass("active no_transition");
					}
				});
		}
	
		window.location.hash = "#"+current;
	}
}(window._slides = window._slides || {}, jQuery));

$(document).ready(function(){
	hash = window.location.hash;
	if(hash) _slides.change_slide(hash.replace("#",""));
});