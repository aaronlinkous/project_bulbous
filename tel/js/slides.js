Slide = (function() {
	
	function Slide(current_slide){
		this.current_slide = current_slide || null;
		this.min = 1;
		this.max = 5;
	}
	Slide.prototype = {
		up: function(){
			console.log('up');
		},
		down: function(){
			console.log('down');
		},
		next: function(){
			if(this._is_max()){
				return 'Max';
			}
			console.log('next');
			this.current_slide++;
		},
		prev: function(){
			if(this._is_min()){
				return 'Min';
			}
			console.log('prev');
			this.current_slide--;
		},
		_is_min: function(){
			console.log(this.current_slide);
			return (this.current_slide <= this.min);
		}, 
		_is_max: function(){
			return (this.current_slide >= this.max);
		}
	};

	return Slide;
})();
