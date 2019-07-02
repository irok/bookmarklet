(function(path) {
    if (/^\\\\/.test(path)) {
        alert('smb:' + path.replace(/\\/g, '/'));
    }
})(prompt('file path'));
