import morgan from 'koa-morgan'

import Logger from '../utils/logger'

const stream: morgan.StreamOptions = {
  write: (message) => Logger.http(message),
}

const skip = () => {
  const env = process.env.NODE_ENV ?? 'development'

  return env !== 'development'
}

const loggerMiddleware = morgan('short', { stream, skip })

export default loggerMiddleware
