import React from 'shell-mfe/react'
import { Link } from 'shell-mfe/react-router-dom'

export const DashboardPage = (): JSX.Element => {
  return (
    <div>
      <h1>Dashboard Page</h1>

      <h6>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati corrupti nulla quidem
        beatae error iste labore nemo ducimus, velit debitis sapiente, porro dicta. Architecto fuga
        deserunt debitis nobis reprehenderit quaerat?
      </h6>

      <Link to="/">Home</Link>
    </div>
  )
}
