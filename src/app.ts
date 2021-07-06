import Koa from 'koa'

import loaders from './loaders'
import router from './routes'
import services from './services'
import logger from './utils/logger'

const app = new Koa()

loaders.init({ app, router, services, logger })

export default app
