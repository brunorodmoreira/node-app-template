import dotenv from 'dotenv'

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.test',
})

export default {
  port: process.env.PORT ?? 3000,
}
