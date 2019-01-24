const fs        = require('fs');
const path = require('path');
const webpack = require('webpack');
let _indexFile   = path.join(__dirname, '..','src', 'NodeSelector.js' ); 



var initializeTmpDir = ( dir )=>{
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
}

initializeTmpDir( 'dist' );


module.exports = () => {

  return new Promise((resolve, reject) => {
      var res = {
    
        entry: {
          ai_node_selector: _indexFile
        },
        output: {
          filename: '[name].js',
          path: path.resolve(__dirname, '../dist')
        },
        optimization: {
          // We no not want to minimize our code.
          minimize: false//,
        //   runtimeChunk: "single", // enable "runtime" chunk
        //   splitChunks: {
        //     minChunks: Infinity,
        //     cacheGroups: {
        //       vendor: {
        //         test: /\.js$/,
        //         name: "ai_object_core",
        //         chunks: "all"
        //       }
        //     }
        //   }

        },
        plugins: [
        ],
        module: {
          rules: [
            {
             test: content => {
                return /\.js$/.test( content );
             },
             use: 'imports-loader?this=>window'
          },
          {
              test: content => {
                  return /\.js$/.test( content );
              },
              use: 'exports-loader?com=com'
          }

          ],

          noParse: content => /\.js$/.test( content )
        }
      };
      resolve( res  );
  });

};