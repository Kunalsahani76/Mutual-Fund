import About from '../pages/About'
import Blogs from '../pages/Blogs'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Services from '../pages/Services'

export const DEFAULT_ROUTE = '#/home'

const routeMap = {
  '#/home': Home,
  '#/about': About,
  '#/services': Services,
  '#/blogs': Blogs,
  '#/contact': Contact,
}

export function getRouteFromHash(hash) {
  return routeMap[hash] ? hash : DEFAULT_ROUTE
}

function AppRoutes({ route }) {
  const Page = routeMap[route] || Home

  return <Page />
}

export default AppRoutes
