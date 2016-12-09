var webpack = require('webpack');
var path = require('path');

module.exports = {
    context : __dirname,
    entry: [
        'webpack-hot-middleware/client',
        './Client/index-client.js'
    ],
    output: {
        path: path.join(__dirname, 'Client/Assets/Dist/'),
        filename: 'bundle.js',
        publicPath: '/Dist/'
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader'],
            },
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'raw-loader'
            },
            {
                test : /\.css$/,
                loader: 'style!css'           
            }
        ]
    },
    plugins : [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : JSON.stringify('development')
        })
    ],
    
};
