(function () {
	var MDConvert = Markdown.getSanitizingConverter();
	var Editor = new Markdown.Editor(MDConvert);

	Editor.run();
})();

(function(Builder, $, undefined ) {
	
	var _styles = [];//private
    
	Builder.slide_style = function (style_obj) {
		var key = style_obj.style;
		var value = (style_obj.post)?style_obj.val.concat(style_obj.post):style_obj.val;
		if(!key) return false;
		this.add_style(key, value);
		if(_styles.length){
			this.render();
		}
	}

	Builder.render = function(){
		$("#slide_styles").html("#slide {" + _styles.join(';') + ";}");
	}

	Builder.add_style = function (key, value) {
		_styles.push(key + ":" + value);
	}
	
	Builder.styles = function(){
		return _styles;   
	}
	
	Builder.init = function(styles)
	{
		$.each(styles,function(index,style){
			Builder.slide_style(style);
		});
	}
	
	
	
}(window.Builder = window.Builder || {}, jQuery));


$(document).ready(function(){
	


	//Mimic loading from server
	var styles = [{style:'display',val:'none'},{style:'top',val:'10',post:'px'}];
	Builder.init(styles);
	console.log("Applying Styles to Slide:",Builder.styles());

	$(".slide_style").on("keyup click blur focus change paste", function(e) {
		
		var style_obj = {
			style : $(this).attr("data-style"),
			val: $(this).val(),
			post : $(this).attr("data-post") || ""
		}
		
		Builder.slide_style(style_obj);
	});

	$("#save").on("click", function(e) {
		console.log("Saving Styles to DB:",Builder.styles());
	});
});