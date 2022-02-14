import React from 'shell-mfe/react'
import { Routes as RoutesDom, Route } from 'shell-mfe/react-router-dom'

const HomePageLazy = React.lazy(() => import('pages/Home'))
const DashboardPageLazy = React.lazy(() => import('pages/Dashboard'))

export const Routes = () => {
  const routesMap = [
    {
      index: true,
      path: '/',
      element: HomePageLazy,
    },
    {
      path: 'dashboard',
      element: DashboardPageLazy,
    },
  ]

  return (
    <RoutesDom>
      {routesMap.map(({ element: Element, ...restRoute }) => (
        <Route {...restRoute} element={<Element />} />
      ))}
    </RoutesDom>
  )
}
