import React, { FC, ReactNode } from 'react'

interface ButtonProps {
  onClick?: () => void
  variant: 'fill' | 'outline'
  children: ReactNode | JSX.Element
  className?: string
  disabled?: boolean
}

const Button: FC<ButtonProps> = (props) => {
  const { onClick, variant, children, className, disabled } = props

  const classes = [className, '']

  switch (variant) {
    case 'fill':
      classes.push(
        'bg-cyan-800 hover:bg-cyan-700 active:bg-cyan-600 focus-visible:ring ring-cyan-500 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-4'
      )
      break
    case 'outline':
      classes.push(
        'border border-gray-300 hover:border-gray-200 active:border-gray-100 focus-visible:ring ring-gray-500 text-gray-700 text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-4'
      )
      break
  }

  if (disabled) {
    classes.push('opacity-75 bg-gray-100 pointer-events-none')
  }

  return (
    <button className={classes.join(' ')} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
