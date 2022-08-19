import React from 'react'
import * as S from 'components/styles'
import Button from 'components/Button'
import buttoms_template from './buttons.html'
const ButtonPage: React.FC = () => (
  <>
    <h1>Button</h1>
    <h2>Basic Button</h2>
    <S.Demo>
      <Button
        variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </S.Demo>
    <S.Code dangerouslySetInnerHTML={{ __html: buttoms_template }} />
  </>
)
export default ButtonPage