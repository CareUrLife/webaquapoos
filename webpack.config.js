module.exports = {
    entry: [
        './Client/master.js'
    ],
    output: {
        path: './Client/Assets/Utils/',
        filename: 'master.react.js'
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
