import './mithrilSetup'
import path from 'path'
import fs from 'fs'
import compression from 'compression'
import 'css-modules-require-hook/preset'
import express from 'express'
import routes from '../src/routes'
import render from './render'

import mongoose from 'mongoose'
const models = require('./models/index')

const api = require('./routes/api')
const image = require('./routes/image')
const admin = require('./routes/admin')


const port = 3000
const app = express()


const getHtml = () =>
  fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf8')

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen () {
  app.use('/assets', express.static('public'))
  app.use('/api', api)
  app.use('/admin', admin)
  app.use('/image', image)

  app.use(render({
    html: getHtml,
    routes: routes
  }))

  app.use(compression())

  const assetsDir = path.resolve(__dirname, '../dist/')

  app.use(express.static(assetsDir))
  app.use((req, res) => res.sendFile(`${assetsDir}/index.html`))

  app.listen(port, err => {
    if (err) {
      console.log(err)
    }
  })
}

function connect () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.Promise = require('bluebird');
  return mongoose.connect('mongodb://localhost/myapp', options).connection;
}
