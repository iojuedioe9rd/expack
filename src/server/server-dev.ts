/* eslint-disable no-undef */
// license

import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'

console.log("hi")

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html'),
            compiler = webpack(config as webpack.Configuration)


console.log("hi")
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))
console.log("hi")
app.use(webpackHotMiddleware(compiler))
console.log("hi")
app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err: any, result: any) => {
  if (err) {
    return next(err)
  }
  res.set('content-type', 'text/html')
  res.send(result)
  res.end()
  })
})
console.log("hi")
const PORT = process.env.PORT || 8080
console.log("hi")
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
