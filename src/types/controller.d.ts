import type { IMiddleware } from 'koa-router'

interface IController {
  [method: string]: IMiddleware
}
