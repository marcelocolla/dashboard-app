import React from 'shell-mfe/react'
import { BrowserRouter } from 'shell-mfe/react-router-dom'

import { Routes } from 'routes/index'

const MainRoutes = (): JSX.Element => (
  <BrowserRouter>
    <React.Suspense fallback={'carregando...'}>
      <Routes />
    </React.Suspense>
  </BrowserRouter>
)

export default MainRoutes
