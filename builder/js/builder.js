(function () {
	var MDConvert = Markdown.getSanitizingConverter();
	var Editor = new Markdown.Editor(MDConvert);

	Editor.run();
})();

(function(Builder, $, undefined ) {

}(window.Builder = window.Builder || {}, jQuery));