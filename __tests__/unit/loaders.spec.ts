import routesLoader from '../../src/loaders/routesLoader'
import vendorsLoader from '../../src/loaders/vendorsLoader'

jest.mock('../../src/routes', () => ({
  routes: () => ['/foo', '/bar'],
  allowedMethods: () => ['get', 'post'],
}))

jest.mock('koa-bodyparser', () => () => 'bodyParser')

const MOCKED_APP = {
  use: jest.fn(),
} as any

describe('loaders', () => {
  afterEach(() => {
    ;(MOCKED_APP.use as jest.Mock).mockClear()
  })

  describe('routesLoader', () => {
    it('should properly injects routes in App instance', () => {
      routesLoader({ app: MOCKED_APP })

      expect(MOCKED_APP.use).toHaveBeenCalledWith(['/foo', '/bar'])
      expect(MOCKED_APP.use).toHaveBeenCalledWith(['get', 'post'])
    })
  })

  describe('vendorsLoader', () => {
    it('should properly injects used third party in App instance', () => {
      vendorsLoader({ app: MOCKED_APP })

      expect(MOCKED_APP.use).toHaveBeenCalledWith('bodyParser')
    })
  })
})
