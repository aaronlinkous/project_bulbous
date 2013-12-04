var dir,hash,current = 0;

function change_slide(dir) {
	console.log(dir);
	switch(dir) {
		case "next":
			if(current < num) {
				current++;
				$(".active").removeClass("active viewed").addClass("viewed");
				$(".slide:eq("+current+")").addClass("active");
			}
			break;
		case "prev":
			if(current > 0) {
				current--;
				$(".active").removeClass("active viewed");
				$(".slide:eq("+current+")").removeClass("viewed").addClass("active");
			}
			break;
		default:
			current = dir;
			$(".slide").removeClass("active viewed").each(function(){
				if($(this).attr("data-slide") < dir) {
					$(this).addClass("viewed");
				} else if($(this).attr("data-slide") == dir) {
					$(this).addClass("active");
				}
			});
	}

	window.location.hash = "#"+current;
}

$(document).ready(function(){
	hash = window.location.hash;
	if(hash){
		hash = hash.replace("#","");
		change_slide(hash);
	}

}).keydown(function(e){
	switch(e.keyCode) {
		case 37:
			change_slide("prev");
			break;
		case 38:
			change_slide("up");
			break;
		case 39:
			change_slide("next");
			break;
		case 40:
			change_slide("down");
			break;
	}
});