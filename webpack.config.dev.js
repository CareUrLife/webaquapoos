var webpack = require('webpack');
var path = require('path');

module.exports = {
    context : __dirname,
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        path.join(__dirname, 'Client/index-client.js')
    ],
    output: {
        path: path.resolve(__dirname, 'Client/Assets/Utils/'),
        filename: 'bundle.js',
        publicPath: '/Utils/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=react-hmre'],
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
