import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = {
    message: 'Hello World',
  }

  await next()
})

app.use(bodyParser())

app.use(router.routes())
app.use(router.allowedMethods())

export default app
