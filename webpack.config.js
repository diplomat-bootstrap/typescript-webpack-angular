var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: "./dist/bundle.js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts"
            }, {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=' + __dirname + '/!raw'
            }
        ]
    },
    plugins: [
        //new webpack.SourceMapDevToolPlugin("./dist/bundle.js.map", null, "[absolute-resource-path]", "[absolute-resource-path]")
        //new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
        port: 3000,
        hot: true
    }
};
