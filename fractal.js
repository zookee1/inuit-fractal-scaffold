'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'inuitcss-fractal-scaffold');

/* Destination for the static export */
fractal.web.set('builder.dest', 'build');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

/* Tell Fractal what default preview template to use */
fractal.components.set('default.preview', '@preview');

/* Specify a directory of static assets (fonts/css etc.) */
fractal.web.set('static.path', __dirname + '/public');
