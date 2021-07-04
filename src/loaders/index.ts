import type { ILoader, ILoaderArgs } from '../types/loader'
import routesLoader from './routesLoader'
import servicesLoader from './servicesLoader'
import vendorsLoader from './vendorsLoader'

const LOADERS: ILoader[] = [vendorsLoader, routesLoader, servicesLoader]

const init: ILoader = (options) => {
  for (const loader of LOADERS) {
    loader(options)
  }
}

export default { init }
