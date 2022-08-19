import styled from 'styled-components'
export const Demo = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 24px;
  border: 1px solid rgba(0, 0, 0, .1);
`
export const Code = styled.code`
  display: block;
  margin-top: 32px;
  background-color: rgb(40, 42, 54);
  padding: 16px;
  border-radius: 5px;
  * {
    color: rgb(248, 248, 242);
    letter-spacing: 0;
    line-height: 24px;
    font-weight: 400;
    white-space: pre;
    font-family: "Fira Code", Consolas, "Courier New", monospace;
    font-size: 14px;
  }
  & > * {
    white-space: normal!important;
  }
`