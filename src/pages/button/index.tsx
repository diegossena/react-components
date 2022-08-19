import React from 'react'
import * as S from 'components/styles'
import Button from 'components/Button'
import buttoms_template from './buttons.html'
import { javascript } from '@codemirror/lang-javascript';
import { createTheme } from '@uiw/codemirror-themes';
import CodeMirror from '@uiw/react-codemirror';
import StringToReactComponent from 'string-to-react-component'
import { tags } from '@lezer/highlight';
//asdasd
var test
const myTheme = createTheme({
  theme: 'light',
  settings: {
    background: '#282a36',
    foreground: '#75baff',
    caret: '#5d00ff',
    selection: '#036dd626',
    selectionMatch: '#036dd626',
    lineHighlight: '#8a91991a',
  },
  styles: [
    { tag: tags.comment, color: '#6272a4' },
    { tag: tags.variableName, color: '#fff' },
    { tag: [tags.string, tags.special(tags.brace)], color: '#f1fa8c' },
    { tag: tags.number, color: '#bd93f9' },
    { tag: tags.bool, color: '#bd93f9' },
    { tag: tags.null, color: '#bd93f9' },
    { tag: tags.keyword, color: '#bd93f9' },
    { tag: tags.operator, color: '#bd93f9' },
    { tag: tags.className, color: '#bd93f9' },
    { tag: tags.definition(tags.typeName), color: '#bd93f9' },
    { tag: tags.typeName, color: '#bd93f9' },
    { tag: tags.angleBracket, color: '#bd93f9' },
    { tag: tags.tagName, color: '#8be9fd', fontStyle: 'itanic' },
    { tag: tags.attributeName, color: '#bd93f9' },
  ],
});
const ButtonPage: React.FC = () => {
  const [code, setCode] = React.useState(`<>
  <Button variant="text">Text</Button>
  <Button variant="contained">Contained</Button>
  <Button variant="outlined">Outlined</Button>
</>`)
  return (
    <>
      <h1>Button</h1>
      <h2>Basic Button</h2>
      <S.Demo>
        {/* <Button variant="text"
        >Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button> */}
        <StringToReactComponent data={{ Button }}>
          {`({ Button }) => (${code})`}
        </StringToReactComponent>
      </S.Demo>
      <S.Code>
        <CodeMirror
          value={code}
          height="200px"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          theme={myTheme}
          onChange={value => setCode(value)}
          basicSetup={{ lineNumbers: false, foldGutter: false }}

        />
      </S.Code>
    </>
  )
}
export default ButtonPage