(function () {
	var MDConvert = Markdown.getSanitizingConverter();
	var Editor = new Markdown.Editor(MDConvert);

	Editor.run();
})();

(function(Builder, $, undefined ) {
	var style_arr = {};

	Builder.slide_style = function(style,val,post) {
		styles = "";
		style_arr[style] = val+post;

		$.each(style_arr, function(style,val) {
			styles += style+":"+val+";";
		});

		$("#slide_styles").html("#slide {"+styles+"}");
	}

}(window.Builder = window.Builder || {}, jQuery));


$(document).ready(function(){
	$(".slide_style").on("keyup click blur focus change paste", function(e) {
		style = $(this).attr("data-style");
		val = $(this).val();
		post = $(this).attr("data-post") || "";

		Builder.slide_style(style,val,post);
	});
});