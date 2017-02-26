import './mithrilSetup'
import webpack from 'webpack'
import path from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from './webpack.config.dev'
import 'css-modules-require-hook/preset'
import express from 'express'
import routes from '../src/routes'
import render from './render'
import mongoose from 'mongoose'
const models = require('./models/index')

const api = require('./routes/api')

const port = 3000
const app = express()

const compiler = webpack(config)

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen () {


  app.use('/api', api)

  const webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
    compress: true,
    publicPath: config.output.publicPath
  })

  app.use(webpackDevMiddlewareInstance)


  webpackDevMiddlewareInstance.waitUntilValid(() => {
    const getHtml = () =>
      webpackDevMiddlewareInstance.fileSystem.readFileSync(path.join(compiler.outputPath, 'index.html')).toString()

    app.use(render({
      html: getHtml,
      routes: routes
    }))

    app.listen(port, err => {
      if (err) {
        console.log(err)
      }
    })
  })
}

function connect () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.Promise = require('bluebird');
  return mongoose.connect('mongodb://localhost/myapp', options).connection;
}
