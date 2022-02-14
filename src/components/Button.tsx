import React from 'shell-mfe/react'

interface ButtonProps {
  label: string
}

const Button = ({ label }: ButtonProps): JSX.Element => {
  const [count, setCount] = React.useState(0)

  return <button type="button" onClick={() => setCount(count + 1)}>{`${label} - ${count}`}</button>
}

export default Button
