const esbuild = require('esbuild')
const chalk = require('chalk')

module.exports = function() {
  const js = esbuild.buildSync({
    entryPoints: [
      './src/js/app.jsx'
    ],
    bundle: true,
    target: 'es2018',
    minify: process.env.NODE_ENV === 'production',
    sourcemap: process.env.NODE_ENV === 'development',
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    outfile: './public/app.js'
  })

  if (!js.warnings.length) {
    console.log( chalk.magenta(`[build] [js] built javascript file`) )
  }
}
