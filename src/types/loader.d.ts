import type Application from 'koa'
import type Router from 'koa-router'
import type { Logger } from 'winston'

type ILoaderArgs = {
  app: Application
  router: Router
  logger: Logger
  services: any
}

type ILoader = (args: ILoaderArgs) => void
