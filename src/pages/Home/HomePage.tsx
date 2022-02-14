import React from 'shell-mfe/react'
import { Link } from 'shell-mfe/react-router-dom'

import Button from 'components/Button'

export const HomePage = (): JSX.Element => {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to="/dashboard">Dashboard</Link>
      <hr />
      <Button label="Contador" />
    </div>
  )
}
