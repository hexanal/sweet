const watcher = require('./helpers/watcher')
const compileJS = require('./compilers/javascript')
const compileSass = require('./compilers/sass')
const compileAssets = require('./compilers/assets')

const watchAll = function() {
  watcher({
    glob: ['./src/js/**/*.(js|jsx)'],
    label: 'js',
    callback: compileJS
  })

  watcher({
    glob: ['./src/**/*.scss'],
    label: 'sass',
    callback: compileSass
  })

  watcher({
    glob: ['./src/assets/**/*'],
    label: 'assets',
    callback: compileAssets
  })
}

watchAll()
