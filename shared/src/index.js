require('headjs/dist/1.0.0/head.min');
let Reveal = require('reveal.js');
require('reveal.js/css/reveal.css');
require('./theme.scss');

Reveal.initialize({
    history: true,
    dependencies: [
        {src: 'dist/node_modules/reveal.js/plugin/notes/notes.js', async: true},
        {
            src: 'dist/node_modules/reveal.js/plugin/highlight/highlight.js', async: true, callback: function () {
                hljs.initHighlightingOnLoad();
            }
        }
    ]
});

global.Reveal = window.Reveal = Reveal;