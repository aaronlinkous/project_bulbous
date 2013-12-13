(function () {
	var MDConvert = Markdown.getSanitizingConverter();
	var Editor = new Markdown.Editor(MDConvert);

	Editor.run();
})();

(function(Builder, $, undefined ) {
	
	var _styles = {};//private
	
	Builder.slide_style = function (style_obj) {
		var key = style_obj.style;
		var value = (style_obj.post)?style_obj.val.concat(style_obj.post):style_obj.val;
		if(!key) return false;
		this.add_style(key, value);
		if(Object.keys(_styles).length){
			this.render();
		}
		$("input[data-style='"+key+"']").val(style_obj.val);
	}
	
	Builder.cssString = function(){
		return $.map(Object.getOwnPropertyNames(_styles), function(k) {
			return [k, _styles[k]].join(':')
		}).join(';').concat(';');
	}

	Builder.render = function(){
		$("#slide_styles").html("#slide {" + this.cssString()+ "}");
	}

	Builder.add_style = function (key, value) {
		_styles[key] = value;
	}
	
	Builder.styles = function() {
		return _styles;
	}
	
	Builder.init = function(styles) {
		$.each(styles,function(index,style){
			Builder.slide_style(style);
		});
	}
	
	
	
}(window.Builder = window.Builder || {}, jQuery));



$(document).ready(function(){
	//Mimic loading from server
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
		console.log("Saving Styles to DB:",Builder.cssString(), Builder.styles());
	});
});