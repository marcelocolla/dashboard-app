import React from 'shell-mfe/react'
import { Switch, Route } from 'shell-mfe/react-router-dom'

const HomePageLazy = React.lazy(() => import('pages/Home'))
const DashboardPageLazy = React.lazy(() => import('pages/Dashboard'))

export const Routes = () => {
  const routesMap = [
    {
      exact: true,
      path: '/',
      element: HomePageLazy,
    },
    {
      path: '/dashboard',
      element: DashboardPageLazy,
    },
  ]

  return (
    <Switch>
      {routesMap.map(({ element: Element, ...restRoute }) => (
        <Route {...restRoute} component={Element} />
      ))}
    </Switch>
  )
}
