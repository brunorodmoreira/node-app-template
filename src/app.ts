import Koa from 'koa'

import loaders from './loaders'

const app = new Koa()

loaders.init({ app })

export default app
