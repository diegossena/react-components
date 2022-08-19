import React from 'react'
import * as S from './styles'
const pages = [
  ['/', 'Overview'],
  ['/editor', 'Editor'],
  ['/button', 'Button']
]
const Nav: React.FC = () => (
  <S.Container>
    {pages.map(([path, title], index) => (
      <S.NavLink
        key={index}
        to={path}
      >{title}</S.NavLink>
    ))}
  </S.Container >
)
export default Nav