// const http = require("http")

// const server = http.createServer((req, res) => {
//   res.writeHead(200)
//   res.end("koa源码解析")
// })

// server.listen(8888, () => {
//   console.log("8888端口已开启")
// })

const Koa = require("./application.js")
const app = new Koa()

// app.use((req, res) => {
//   res.writeHead(200)
//   res.end("koa源码解析")
// })

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

app.use(async (ctx, next) => {
  // ctx.body = "hello koa" + ctx.url
  ctx.body = '1'
  await next()
  ctx.body += '2' 
})

app.use(async (ctx, next) => {
  ctx.body += '3'
  await delay()
  await next()
  ctx.body += '4' 
})

app.use(async (ctx, next) => {
  ctx.body += '5'
})

app.listen(8888, () => {
  console.log("8888端口已开启")
})