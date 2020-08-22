let wikimatch = window.location.href.match(/https?:\/\/\w+\.wikipedia\.org\/wiki\/([^?&]*)/)
if (wikimatch) window.location = `/w/index.php?title=${wikimatch[1]}&stable=1`
