const fse = require('fs-extra')
const chalk = require('chalk')

module.exports = function() {
  return fse.copy('./src/assets', './public/assets')
    .then(() => {
      console.log( chalk.magenta(`[build] [assets] assets folder updated`) )
    })
    .catch(err => {
      console.log( chalk.red(`[error] [assets] Zorg messed up while copying the assets folder again!`) )
      console.error( err )
    })
}
