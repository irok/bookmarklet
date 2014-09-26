(function(document, location, screen, encodeURIComponent, url_param, text) {
    text += document.title;
    url_param += encodeURIComponent(document.URL);
    if (location.host === 'twitter.com') {
        text = text.replace(/^.+?さんはTwitterを使っています: "(.+)"$/, ' RT @' + location.pathname.split('/')[1] + ': $1');
        url_param = '';
    }
    open('https://twitter.com/intent/tweet?text='+encodeURIComponent(text)+url_param,'_blank','left='+(screen.width/2-275)+',top='+(screen.height/2-225)+',width=550,height=450,personalbar=no,toolbar=no,scrollbars=yes,location=yes,resizable=yes');

})(document, location, screen, encodeURIComponent, '&url=', ' － ');
