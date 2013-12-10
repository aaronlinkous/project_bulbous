(function(Builder, $, undefined ) {

	(function () {
		var MDConvert = Markdown.getSanitizingConverter();
		var Editor = new Markdown.Editor(MDConvert);

		Editor.run();
	})();

}(window.Builder = window.Builder || {}, jQuery));