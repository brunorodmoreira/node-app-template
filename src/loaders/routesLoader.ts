import type { ILoader } from '../types/loader'

const routesLoader: ILoader = ({ app, router }) => {
  app.use(router.routes())
  app.use(router.allowedMethods())
}

export default routesLoader
