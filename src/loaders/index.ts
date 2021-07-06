import type { ILoader } from '../types/loader'
import loggerLoader from './loggerLoader'
import routesLoader from './routesLoader'
import servicesLoader from './servicesLoader'
import vendorsLoader from './vendorsLoader'

const LOADERS: ILoader[] = [
  vendorsLoader,
  routesLoader,
  servicesLoader,
  loggerLoader,
]

const init: ILoader = (options) => {
  for (const loader of LOADERS) {
    loader(options)
  }
}

export default { init }
