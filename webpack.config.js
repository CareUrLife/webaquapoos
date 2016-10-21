module.exports = {
    entry: [
        './Client/index.js'
    ],
    output: {
        path: './Client/Assets/Utils/',
        filename: 'index.react.js'
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
        }]
    }
};
