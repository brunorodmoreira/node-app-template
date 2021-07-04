import type Application from 'koa'

type ILoader = ({ app }: { app: Application }) => void
