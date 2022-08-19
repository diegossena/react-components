import React from 'react'
import * as S from 'components/styles'
import template from './template.html'
const Editor: React.FC = () => (
  <>
    <h1>Copy from editor here</h1>
    <S.Code dangerouslySetInnerHTML={{ __html: template }} contentEditable />
  </>
)
export default Editor