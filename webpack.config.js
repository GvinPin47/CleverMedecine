var webpack = require('webpack');
var path=require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: ["./client_site/main.js"],
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ["babel-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif",
            },
             {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg",
            },
             {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png",
               
            },
            {
                test: /\.jsx$/,
                loader: "react-hot-loader!babel-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },

          
            
            
        ]
  
    
       
    }
    
             
}