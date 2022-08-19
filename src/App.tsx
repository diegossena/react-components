import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from 'components/app/Nav'
import * as S from 'components/app/styles'
const App: React.FC = () => (
  <S.Container>
    <Nav />
    <S.Main>
      <Outlet />
    </S.Main>
  </S.Container>
)
export default App