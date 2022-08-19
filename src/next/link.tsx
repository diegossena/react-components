import React from 'react'
interface Props {
  href?: string
  children?: React.ReactNode
  passHref?: boolean
}
const Link: React.FC<Props> = ({ children, ...props }) => (
  <a {...props}>{children}</a>
)
export default Link