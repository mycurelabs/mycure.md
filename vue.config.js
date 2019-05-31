// const path = require('path');
// const PrerenderSPAPlugin = require('prerender-spa-plugin');
// const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;
// const pageRoutes = require('./src/assets/.page-routes.json');

// const pagesToRender = [];
// const titlesToRender = {};

// pageRoutes.forEach(function (page) {
//   pagesToRender.push(page.path);
//   titlesToRender[page.path] = {};
//   titlesToRender[page.path].title = page.title;
//   titlesToRender[page.path].description = page.description;
//   titlesToRender[page.path].image = page.image;
// });

// module.exports = {
//   configureWebpack: {
//     plugins: [
//       new PrerenderSPAPlugin({
//         staticDir: path.resolve(__dirname, 'dist'),
//         routes: pagesToRender,
//         postProcess: function (context) {
//           return context.html.replace(
//             /MYCURE_TITLE/g,
//             titlesToRender[context.route].title
//           ).replace(
//             /MYCURE_DESCRIPTION/g,
//             titlesToRender[context.route].description
//           ).replace(
//             /MYCURE_IMAGE/g,
//             titlesToRender[context.route].image
//           ).replace(
//             /MYCURE_URL/g,
//             'https://mycure.md' + context.route
//           );
//         },
//         renderer: new PuppeteerRenderer({
//           headless: true,
//           renderAfterTime: 5000
//         })
//       })
//     ]
//   }
// };