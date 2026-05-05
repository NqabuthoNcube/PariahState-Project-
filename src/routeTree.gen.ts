import { Route as rootRouteImport } from './routes/__root'
import { Route as ReserveRouteImport } from './routes/reserve'
import { Route as OrderRouteImport } from './routes/order'
import { Route as MenuRouteImport } from './routes/menu'
import { Route as ContactRouteImport } from './routes/contact'
import { Route as IndexRouteImport } from './routes/index'

const ReserveRoute = ReserveRouteImport.update({
  id: '/reserve',
  path: '/reserve',
  getParentRoute: () => rootRouteImport,
} as any)
const OrderRoute = OrderRouteImport.update({
  id: '/order',
  path: '/order',
  getParentRoute: () => rootRouteImport,
} as any)
const MenuRoute = MenuRouteImport.update({
  id: '/menu',
  path: '/menu',
  getParentRoute: () => rootRouteImport,
} as any)
const ContactRoute = ContactRouteImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/contact': typeof ContactRoute
  '/menu': typeof MenuRoute
  '/order': typeof OrderRoute
  '/reserve': typeof ReserveRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/contact': typeof ContactRoute
  '/menu': typeof MenuRoute
  '/order': typeof OrderRoute
  '/reserve': typeof ReserveRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/contact': typeof ContactRoute
  '/menu': typeof MenuRoute
  '/order': typeof OrderRoute
  '/reserve': typeof ReserveRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/contact' | '/menu' | '/order' | '/reserve'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/contact' | '/menu' | '/order' | '/reserve'
  id: '__root__' | '/' | '/contact' | '/menu' | '/order' | '/reserve'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ContactRoute: typeof ContactRoute
  MenuRoute: typeof MenuRoute
  OrderRoute: typeof OrderRoute
  ReserveRoute: typeof ReserveRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/reserve': {
      id: '/reserve'
      path: '/reserve'
      fullPath: '/reserve'
      preLoaderRoute: typeof ReserveRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/order': {
      id: '/order'
      path: '/order'
      fullPath: '/order'
      preLoaderRoute: typeof OrderRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/menu': {
      id: '/menu'
      path: '/menu'
      fullPath: '/menu'
      preLoaderRoute: typeof MenuRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ContactRoute: ContactRoute,
  MenuRoute: MenuRoute,
  OrderRoute: OrderRoute,
  ReserveRoute: ReserveRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { createStart } from '@tanstack/react-start'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
  }
}
