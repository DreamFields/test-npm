/*
 * @Author: Meng Tian
 * @Date: 2021-07-07 11:38:50
 * @Description: Do not edit
 */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./example/src/index.html"),
    filename: "./index.html"
});

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "./example/src/app.js"),
    output: {
        path: path.join(__dirname, "example/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: "babel-loader",
            exclude: /node_modules/
        }]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001,
        open:true,        
    }
};
