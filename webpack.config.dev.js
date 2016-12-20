var webpack = require('webpack');
var path = require('path');

require.extensions['.css'] = () => {
  return;
};

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
                exclude: path.join(__dirname, 'node_modules'),
                loaders: ['react-hot', 'babel-loader'],
            },
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: path.join(__dirname, 'node_modules')
            },
            {
                test: /\.json$/,
                loader: 'raw-loader'
            },
            {
                test : /\.css$/,
                loader: 'style-loader!css-loader?module',
                include: /flexboxgrid/
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
