(function(Slide, $, undefined ) {
	Slide.current = 0;

	Slide.change_hash = function(current) {
		window.location.hash = "#"+current;
	},
	Slide.next = function(){
		if(Slide.current < num) {
			Slide.current++;
			$(".active").removeClass("active viewed no_transition").addClass("viewed");
			$(".slide:eq("+Slide.current+")").addClass("active");
		}

		Slide.change_hash(Slide.current);
	},
	Slide.prev = function() {
		if(Slide.current > 0) {
			Slide.current--;
			$(".active").removeClass("active viewed no_transition");
			$(".slide:eq("+Slide.current+")").removeClass("viewed").addClass("active no_transition");
		}

		Slide.change_hash(Slide.current);
	},
	Slide.jump = function(dir) {
		Slide.current = dir;
		$(".slide").removeClass("active viewed no_transition").each(function(){
			if($(this).attr("data-slide") < dir) {
				$(this).addClass("viewed");
			} else if($(this).attr("data-slide") == dir) {
				$(this).addClass("active no_transition");
			}
		});

		Slide.change_hash(Slide.current);
	}
	
}(window.Slide = window.Slide || {}, jQuery));