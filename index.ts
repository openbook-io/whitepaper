import express from 'express';
import next from 'next';
import vhost from 'vhost';
import proxy from 'http-proxy-middleware';

const dev = process.env.NODE_ENV !== 'production'
const app = next({dir: 'packages/main', dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  if(dev) {
    server.use(vhost('*.whitepaper-staging-local.com', proxy({
      ws: true,
      target: 'http://whitepaper-staging-local.com:3000'
    })))
  } else {

  }

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(process.env.PORT || 3030, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${process.env.PORT || 3030}`)
  })
})
.catch((ex:any) => {
  console.error(ex.stack)
  process.exit(1)
})