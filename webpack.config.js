const path = require('path')
function join(...args) {
  return path.join(__dirname, ...args)
}
const webpack=require('webpack'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: join('/index.js'),
  output: {
    path: join('/public'),
    filename: "bundle.js",
  },

  devtool: 'inline-source-map',
  devServer: { 
    // historyApiFallback:true, 
    inline: true,
   } ,
  plugins: [
        
        new HtmlWebpackPlugin({
            title: "reaact-todu",
            
            template: './index.html'
        })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, { 
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }, {
        test: /\.less$/,
        use: [
          'style-loader', 'css-loader', 'less-loader' // less-loader 依赖于 less
        ]
      }, {
        //解析jsx语法的loader
        test: /\.js[x]?$/,
        loader: "babel-loader?presets[]=es2015&presets[]=react",
        include: /src/
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      
    ]
  }
}
