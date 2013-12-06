(function(Slide, $, undefined ) {
	Slide.current = 0;

	Slide.change_hash = function(current) {
		window.location.hash = "#"+current;
	},
	Slide.next = function(){
		if(current < num) {
			current++;
			$(".active").removeClass("active viewed no_transition").addClass("viewed");
			$(".slide:eq("+current+")").addClass("active");
		}

		Slide.change_hash(current);
	},
	Slide.prev = function() {
		if(current > 0) {
			current--;
			$(".active").removeClass("active viewed no_transition");
			$(".slide:eq("+current+")").removeClass("viewed").addClass("active no_transition");
		}

		Slide.change_hash(current);
	},
	Slide.jump = function(dir) {
		current = dir;
		$(".slide").removeClass("active viewed no_transition").each(function(){
			if($(this).attr("data-slide") < dir) {
				$(this).addClass("viewed");
			} else if($(this).attr("data-slide") == dir) {
				$(this).addClass("active no_transition");
			}
		});

		Slide.change_hash(current);
	}
	
}(window.Slide = window.Slide || {}, jQuery));