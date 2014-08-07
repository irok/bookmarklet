(function(id, matches) {
    if (matches) {
        open('http://booklog.jp/users/'+id+'?keyword='+matches[1]+matches[2], '_blank')
    } else {
        alert('ISBN not found')
    }
})('gmobooks', document.body.innerHTML.match(/<li><b>ISBN-13:<\/b> (\w+)-(\w+)<\/li>/))
