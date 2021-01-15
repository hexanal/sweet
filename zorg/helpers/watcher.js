const chokidar = require('chokidar')
const chalk = require('chalk')

module.exports = function({ glob, label, callback }) {
  const watcher = chokidar.watch(glob, {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true
  })

  return watcher
    .on('ready', () => console.log( chalk.yellow(`[watch] [${label}]`)) )
    .on('change', path => {
      console.log( chalk.green(`[watch] [${label}] [change] ${path}`) )
      callback()
    })
}
