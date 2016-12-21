// Vimperator Plugin: 'nodeyank'
// Usuage: use :nodeyank

commands.addUserCommand(['ndynk'], 'Yanks the node from a url', 
    function () {
        var url = buffer.URL;
        if (options.get("yankencodedurl").value)
            url = services.get("io").newURI(url, buffer.charser, null).asciiSpec;
        else
            url = services.get("textToSubURI").unEscapeURIForUI(buffer.charset, url).replace(/ /g, "%20");
        node = url.split('/').pop()
        util.copyToClipboard(node, true);
            }
);

    
