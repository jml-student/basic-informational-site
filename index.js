/*const url = require('url')
const http = require('http')
const fs = require('fs')

http
  .createServer((req, res) => {
    const path = url.parse(req.url).pathname
    const file = path === '/' ? 'index.html' : '.' + path + '.html'
    const errorHtml = '<html><body><h1>404 Error</h1></body></html>'

    fs.readFile(file, (err, data) => {
      if (err) {
        const errorFile = '404.html'
        fs.readFile(errorFile, (err404, errorData) => {
          if (err404) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.write(errorHtml)
            return res.end()
          }
          res.writeHead(200, { 'Content-Type': 'text/html' })
          res.write(errorData)
          return res.end()
        })
      }

      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  })
  .listen(8080)*/

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Index'))
app.get('/about', (req, res) => res.send('About'))
app.get('/contact-me', (req, res) => res.send('Contact Me'))
app.get('/404', (req, res) => res.send('404'))

app.listen(8080)
