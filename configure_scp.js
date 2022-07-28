const crypto = require('crypto')
const helmet = require('helmet')

module.exports = (app) => {
    app.use((_, res, next) => {
      res.locals.cspNonce = crypto.randomBytes(16).toString("hex");
      next();
    });

    app.use(helmet());

    app.use(
      helmet.contentSecurityPolicy({
        directives: {
          defaultSrc: ["'self'", "https://ka-f.fontawesome.com"],
          scriptSrc: [(_, res) => `'nonce-${res.locals.cspNonce}'`, "'strict-dynamic'", "https: 'unsafe-inline'"],
          baseUri: ["'none'"],
        },
      }),
      helmet.crossOriginEmbedderPolicy({ policy: "credentialless" })
    );

    return app;
}
