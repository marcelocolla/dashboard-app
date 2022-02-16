import React from 'shell-mfe/react'
import { Button as ButtonMui } from 'shell-mfe/@material-ui/core'

interface ButtonProps {
  label: string
}

const Button = ({ label }: ButtonProps): JSX.Element => {
  const [count, setCount] = React.useState(0)

  return (
    <ButtonMui
      variant="contained"
      color="secondary"
      onClick={() => setCount(count + 1)}
    >{`${label} - ${count}`}</ButtonMui>
  )
}

export default Button
