import React from 'react'
import * as S from './styles'
import Link from 'next/link'
// Types
interface BaseProps {
  color?: 'primary' | 'secondary' | 'success' | 'error'
  variant?: 'text' | 'contained' | 'outlined'
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  disabled?: boolean
  startIcon?: JSX.Element
  endIcon?: JSX.Element
  autoFocus?: boolean
  fullWidth?: boolean
}
export type Props = BaseProps & {
  href?: string
  target?: string
}
// Component
const Button: React.FC<Props> = ({
  href,
  color = 'primary',
  variant = 'text',
  size = 'medium',
  startIcon,
  endIcon,
  children,
  disabled,
  ...props
}) => {
  // Memos
  const Wrapper = React.useMemo(() => (
    ({ children }) => (
      href
        ? <Link href={href} passHref>{children}</Link>
        : <>{children}</>
    )
  ), [href])
  const variants = React.useMemo(() => (
    {
      backgroundColor: 'transparent',
      border: '0',
      hoverBorderColor: 'unset',
      color: {
        primary: '#1976d2',
        secondary: '#9c27b0',
        error: '#d32f2f'
      }[color] || 'inherit',
      hoverBackgroundColor: {
        primary: 'rgba(25, 118, 210, 0.04)',
        secondary: 'rgba(156, 39, 176, 0.04)',
        error: 'rgba(211, 47, 47, 0.04)'
      }[color] || 'rgba(0, 0, 0, 0.04)',
      ...{
        contained: {
          color: color ? '#fff' : 'inherit',
          backgroundColor: disabled
            ? 'rgba(0, 0, 0, 0.12)'
            : {
              primary: '#1976d2',
              secondary: '#9c27b0',
              error: '#d32f2f'
            }[color] || '#e0e0e0',
          hoverBackgroundColor: {
            primary: '#1565c0',
            secondary: '#7b1fa2',
            error: '#c62828'
          }[color] || '#f5f5f5',
          boxShadow:
            '0px 3px 1px -2px rgb(0 0 0 / 20%),'
            + '0px 2px 2px 0px rgb(0 0 0 / 14%),'
            + '0px 1px 5px 0px rgb(0 0 0 / 12%);',
          hoverBoxShadow:
            '0px 2px 4px -1px rgb(0 0 0 / 20%),'
            + '0px 4px 5px 0px rgb(0 0 0 / 14%),'
            + '0px 1px 10px 0px rgb(0 0 0 / 12%)'
        },
        outlined: {
          border: disabled
            ? '1px solid rgba(0, 0, 0, 0.12)'
            : {
              primary: '1px solid rgba(25, 118, 210, 0.5)',
              secondary: '1px solid rgba(156, 39, 176, 0.5)',
              error: '1px solid rgba(211, 47, 47, 0.5)'
            }[color] || '1px solid currentColor',
          hoverBorderColor: {
            primary: '#1976d2',
            secondary: '#9c27b0',
            error: '#d32f2f'
          }[color] || '1px solid currentColor',
        }
      }[variant]
    }
  ), [variant, color, disabled])
  // Render
  return (
    <Wrapper>
      <S.Button
        as={href ? 'a' : 'button'}
        variants={variants}
        size={{
          inherit: {
            fontSize: 'inherit',
            padding: '.8rem'
          },
          small: {
            fontSize: '.8125rem',
            padding: '8px 10px'
          },
          medium: {
            fontSize: '.875rem',
            padding: '10px 16px'
          },
          large: {
            fontSize: '.9375rem',
            padding: '12px 22px'
          }
        }[size]}
        disabled={disabled}
        {...props}
      >
        {startIcon}
        {children}
        {endIcon}
      </S.Button>
    </Wrapper>
  )
}

export default Button
