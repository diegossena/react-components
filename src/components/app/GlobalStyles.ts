import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI","Noto Color Emoji";
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    text-decoration: none;
    font-size: .9rem;
  }
  ::-webkit-scrollbar {
    width: 16px;
    max-height: 16px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(0 0 0 / 0.50);
    border-radius: 5px;
    background-clip: padding-box;
    border: solid transparent;
    border-width: 2px 1px 1px 1px;
  }
  ::-webkit-scrollbar-track {
    border-top: 1px solid rgb(156 156 156);
  }
  html, body, div#root {
    height: 100%;
  }
  table {
    width: 100%;
  }
  input {
    padding: 0 .5rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    outline-color: #222;
  }
  input[type="date"] {
    min-width: 33px;
    max-width: 112px;
  }
  input[type="month"] {
    text-align: right;
    max-width: 143px;
    min-width: 33px;
  }
  img {
    -webkit-user-drag: none;
  }
  button, a {
    cursor: pointer;
  }
  label, button, a {
    user-select: none;
  }
`