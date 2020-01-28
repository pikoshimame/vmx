const functions = require('firebase-functions');
const express = require('express');
const {Nuxt} = require('nuxt');

const app = express();
const nuxt = new Nuxt({
  dev: false,
  buildDir: '.nuxt',
  build: {
    publicPath: '/assets/'
  }
});

/**
 * @param {Object} req
 * @param {Object} res
 * @return {Promise}
 */
function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=10, s-maxage=10');
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, (promise) => {
      promise.then(resolve).catch(reject);
    });
  });
}

app.use(handleRequest);
exports.app = functions.https.onRequest(app);
