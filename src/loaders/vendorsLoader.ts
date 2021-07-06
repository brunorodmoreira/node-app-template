import bodyParser from 'koa-bodyparser'

import type { ILoader } from '../types/loader'

const vendorsLoader: ILoader = ({ app }) => {
  app.use(bodyParser())
}

export default vendorsLoader
