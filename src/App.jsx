import { useEffect, useState } from 'react'
import MainLayout from './layouts/MainLayout'
import AppRoutes, { DEFAULT_ROUTE, getRouteFromHash } from './routes/AppRoutes'
import './App.css'

function App() {
  const [route, setRoute] = useState(() => getRouteFromHash(window.location.hash))

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash(window.location.hash))
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = DEFAULT_ROUTE
    }
  }, [])

  return (
    <MainLayout currentRoute={route}>
      <AppRoutes route={route} />
    </MainLayout>
  )
}

export default App
