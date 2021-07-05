const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const multer = require('multer');
const path = require('path');
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(router)


server.listen(5000, () => {
  console.log('JSON Server is running')
})