(function () {
	var MDConvert = Markdown.getSanitizingConverter();
	var Editor = new Markdown.Editor(MDConvert);

	Editor.run();
})();

(function(Builder, $, undefined ) {
	Builder.slide_style = function(style,val,post) {
		styles = "";
		Builder.style_arr[style] = [val,post];

		$.each(Builder.style_arr, function(style) {
			styles += style+":"+Builder.style_arr[style][0]+Builder.style_arr[style][1]+";";
		});

		$("#slide_styles").html("#slide {"+styles+"}");
	}

}(window.Builder = window.Builder || {}, jQuery));


$(document).ready(function(){
	console.log("Applying Styles to Slide:",Builder.style_arr);

	$(".slide_style").on("keyup click blur focus change paste", function(e) {
		style = $(this).attr("data-style");
		val = $(this).val();
		post = $(this).attr("data-post") || "";

		Builder.slide_style(style,val,post);
	});

	$("#save").on("click", function(e) {
		console.log("Saving Styles to DB:",Builder.style_arr);
	});
});