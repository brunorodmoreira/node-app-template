import Koa from 'koa'

import loaders from './loaders'
import router from './routes'
import services from './services'

const app = new Koa()

loaders.init({ app, router, services })

export default app
