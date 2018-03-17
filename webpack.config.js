let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './shared/src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'shared/dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};