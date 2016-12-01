var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './Client/index-client.js'
    ],
    output: {
        path: path.join(__dirname, 'Client/Assets/Utils/'),
        filename: 'master.react.js',
        publicPath: './Client/Assets/'
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : JSON.stringify('development')
        })
    ],
    
};
