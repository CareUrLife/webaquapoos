var webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackconfig = require('./webpack.config.dev.js'),
    webpackcompiler = webpack(webpackconfig);

function useWebpackMiddleware(app) {
    app.use(webpackDevMiddleware(webpackcompiler, {
        publicPath : webpackconfig.output.publicPath,
            stats: {
                colors: true,
                chunks: false,
                'error-only': true // this reduces the amount of stuff You see
            }
    }));
    app.use(webpackHotMiddleware(webpackcompiler, {
        log: console.log
    }));

    return app;
}

exports.useWebpackMiddleware = useWebpackMiddleware;
