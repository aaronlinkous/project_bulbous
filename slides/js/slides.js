(function(Slide, $, undefined ) {
	this.current = 0;

	Slide.change_hash = function(current) {
		window.location.hash = "#"+current;
	},
	Slide.next = function(){
		if(this.current < num) {
			this.current++;
			$(".active").removeClass("active viewed no_transition").addClass("viewed");
			$(".slide:eq("+this.current+")").addClass("active");
		}

		Slide.change_hash(this.current);
	},
	Slide.prev = function() {
		if(this.current > 0) {
			this.current--;
			$(".active").removeClass("active viewed no_transition");
			$(".slide:eq("+this.current+")").removeClass("viewed").addClass("active no_transition");
		}

		Slide.change_hash(this.current);
	},
	Slide.jump = function(dir) {
		this.current = dir;
		$(".slide").removeClass("active viewed no_transition").each(function(){
			if($(this).attr("data-slide") < dir) {
				$(this).addClass("viewed");
			} else if($(this).attr("data-slide") == dir) {
				$(this).addClass("active no_transition");
			}
		});

		Slide.change_hash(this.current);
	}
	
}(window.Slide = window.Slide || {}, jQuery));