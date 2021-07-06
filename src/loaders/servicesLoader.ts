import type { ILoader } from '../types/loader'

const servicesLoader: ILoader = ({ app, services }) => {
  app.context.services = services
}

export default servicesLoader
