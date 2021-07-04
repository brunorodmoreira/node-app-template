import type Application from 'koa'
import type Router from 'koa-router'

type ILoaderArgs = {
  app: Application
  router: Router
  services: any
}

type ILoader = (args: ILoaderArgs) => void
