const path = require('path');
const plugins = require('./plugins');

const BabelLoader = {
    test: /\.(js)$/,
    exclude: /node_modules/,
    loader: 'babel',
    query: {
        cacheDirectory: true
    }
};

const styleLoaders = [
    'style-loader',
    'css-loader?sourceMap',
    'autoprefixer-loader?browsers=last 2 version',
    'sass-loader?sourceMap&outputStyle=expanded&' +
    'includePaths[]=' +
    (encodeURIComponent(path.resolve(process.cwd(), './node_modules')))
];

const cssLoaders = [
    'style-loader',
    'css-loader?sourceMap',
    'autoprefixer-loader?browsers=last 2 version'
];

const SASSLoader = {
    test: /\.scss$/,
    loader: styleLoaders.join('!')
};

const CSSLoader = {
    test: /\.css$/,
    loader: cssLoaders.join('!')
};

const JSONLoader = {
    test: /\.json$/,
    use: 'json-loader'
};

const FontLoader = {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file?name=public/dist/fonts/"[name].[ext]"'
}

module.exports = {
    BabelLoader: BabelLoader,
    CSSLoader: CSSLoader,
    SASSLoader: SASSLoader,
    JSONLoader: JSONLoader,
    FontLoader: FontLoader
};