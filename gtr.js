// Vimperator Plugin: 'gtr'
// Usuage: use :gtr

commands.addUserCommand(['gtr'], 'Opens Clipboard text in Google Translate', 
	function () {
        let otext = util.readFromClipboard()
        otext = otext.replace(/\-\r?\n/g, '');
        otext = otext.replace(/\r?\n/g, ' ');
		var url = "https://translate.google.com/#auto/en/" ;
	    url += encodeURIComponent(otext);
        liberator.open(url,
            liberator[options.get("activate").has("paste") ? "NEW_TAB" : "NEW_BACKGROUND_TAB"]);

    }
);
