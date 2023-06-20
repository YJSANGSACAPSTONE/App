const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/app', // The path you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:8080', // The URL of your Spring backend
      changeOrigin: true,
    })
  );
};
