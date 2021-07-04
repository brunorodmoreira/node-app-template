import type { ILoader } from '../types/loader'
import routesLoader from './routesLoader'

const loaders: ILoader[] = [routesLoader]

const init: ILoader = (options) => {
  for (const loader of loaders) {
    loader(options)
  }
}

export default { init }
