# inner-text-shim

innerText shim for browsers, that don't support it.


This module is meant to use in the browser with browserify.
if you need a polyfill, use: [innerText-polyfill](https://github.com/duckinator/innerText-polyfill)

# usage

all innerText does is get the `el.innerText` from the `element`, even when the browser does not support it.
you can't set the `innerText` with this module.

```js
var innerText = require('inner-text-shim');
var el = document.querySelector('body');
el.innerHTML = '<p>hello</p><br/>welt'

var text = innerText(el)


/* text ->
"hello


welt"
/*
```

# license
MIT

# credit
 - https://github.com/duckinator/innerText-polyfill
