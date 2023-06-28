const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', 
  entry: '.app.js', 
  output: {
    path: path.resolve(__dirname, 'build'), 
    filename: 'build.js', 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Ruta de tu archivo HTML de plantilla
      filename: 'index.html', // Nombre del archivo HTML de salida
    }),
  ],
};