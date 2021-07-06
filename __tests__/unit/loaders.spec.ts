import loggerLoader from '../../src/loaders/loggerLoader'
import routesLoader from '../../src/loaders/routesLoader'
import servicesLoader from '../../src/loaders/servicesLoader'
import vendorsLoader from '../../src/loaders/vendorsLoader'
import loggerMiddleware from '../../src/middlewares/loggerMiddleware'

jest.mock('koa-bodyparser', () => () => 'bodyParser')

const MOCKED_APP = {
  use: jest.fn(),
  context: {},
} as any

const MOCKED_ROUTER = {
  routes: jest.fn().mockReturnValue(['/foo', '/bar']),
  allowedMethods: jest.fn().mockReturnValue(['get', 'post']),
} as any

const MOCKED_SERVICES = {} as any

const MOCKED_LOGGER = {}

const MOCKED_OPTIONS = {
  app: MOCKED_APP,
  router: MOCKED_ROUTER,
  services: MOCKED_SERVICES,
  logger: MOCKED_LOGGER,
} as any

describe('loaders', () => {
  afterEach(() => {
    MOCKED_APP.use.mockClear()
  })

  describe('routesLoader', () => {
    it('should properly injects routes in App instance', () => {
      routesLoader(MOCKED_OPTIONS)

      expect(MOCKED_APP.use).toHaveBeenCalledWith(['/foo', '/bar'])
      expect(MOCKED_APP.use).toHaveBeenCalledWith(['get', 'post'])
    })
  })

  describe('vendorsLoader', () => {
    it('should properly injects used third party in App instance', () => {
      vendorsLoader(MOCKED_OPTIONS)

      expect(MOCKED_APP.use).toHaveBeenCalledWith('bodyParser')
    })
  })

  describe('servicesLoader', () => {
    it('should properly injects the services in context', () => {
      servicesLoader(MOCKED_OPTIONS)

      expect(MOCKED_APP.context.services).toBe(MOCKED_SERVICES)
    })
  })

  describe('loggerLoader', () => {
    it('should properly injects the logger in context and in App instance', () => {
      loggerLoader(MOCKED_OPTIONS)

      expect(MOCKED_APP.context.logger).toBe(MOCKED_LOGGER)
      expect(MOCKED_APP.use).toHaveBeenCalledWith(loggerMiddleware)
    })
  })
})
