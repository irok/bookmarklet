(function(id, matches) {
    if (matches) {
        open('http://librize.com/places/'+id+'/search?q='+matches[1]+matches[2], '_blank')
    } else {
        alert('ISBN not found')
    }
})('812', document.body.innerHTML.match(/<li><b>ISBN-13:<\/b> (\w+)-(\w+)<\/li>/))
