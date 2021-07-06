import loggerMiddleware from '../middlewares/loggerMiddleware'
import type { ILoader } from '../types/loader'

const loggerLoader: ILoader = ({ app, logger }) => {
  app.context.logger = logger
  app.use(loggerMiddleware)
}

export default loggerLoader
