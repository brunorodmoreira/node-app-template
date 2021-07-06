import Router from 'koa-router'

const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = {
    message: 'Hello World!',
  }

  await next()
})

export default router
