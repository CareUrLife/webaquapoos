var webpack = require('webpack');

module.exports = {
    entry: [
        './Client/index-client.js'
    ],
    output: {
        path: './Client/Assets/Utils/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query:
                {
                    presets:['react']
                }
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
        
        new webpack.DefinePlugin({
            'process.env' : {
                'NODE_ENV' : JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(), //dedupe similar code
        new webpack.optimize.UglifyJsPlugin(), //minify everything
        new webpack.optimize.AggressiveMergingPlugin() //merger chunks
    ]

};
