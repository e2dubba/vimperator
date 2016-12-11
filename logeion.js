// Vimperator Plugin: 'Logieon' 
// Usage: Use :logeion <SomeWord>
// should open a new window with the SomeWord from logieon

commands.addUserCommand(['logeion'], "Search Logieon", 
    function(args) {
        var url = "http://logeion.uchicago.edu/index.html#";
        url += encodeURIComponent(args.string);
        liberator.echo(url)
        var win = window.open(url, '_blank');
        // commands.get("tabopen").action(url);
        win.focus();
    }
);
