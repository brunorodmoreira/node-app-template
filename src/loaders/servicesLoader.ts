import services from '../services'
import type { ILoader } from '../types/loader'

const servicesLoader: ILoader = ({ app }) => {
  app.context.services = services
}

export default servicesLoader
