var path = require('path');

module.exports = {
  // context: __dirname,
  entry: './app/app.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  // resolve: {
  //   modules: ['./node_modules', path.join(__dirname, 'app/components')],
  //   alias: {
  //     Main: 'app/components/Main.jsx',
  //     Form: 'app/components/Form.jsx',
  //     Display: 'app/components/Display.jsx',
  //     weatherUnderground: 'api/weatherUnderground.jsx'
  //   },
  //   extensions: ['*', '.js', '.jsx']
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        //exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0']
          }
        }]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
