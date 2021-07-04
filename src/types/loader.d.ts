import type Application from 'koa'

type ILoaderArgs = {
  app: Application
}

type ILoader = ({ app }: ILoaderArgs) => void
