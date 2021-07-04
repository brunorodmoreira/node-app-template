import router from '../routes'
import type { ILoader } from '../types/loader'

const routesLoader: ILoader = ({ app }) => {
  app.use(router.routes())
  app.use(router.allowedMethods())
}

export default routesLoader
