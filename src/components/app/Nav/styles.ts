import styled from 'styled-components'
import { NavLink as _NavLink } from "react-router-dom"
export const Container = styled.nav`
  height: 100%;
  width: 300px;
  flex-shrink: 0;
  border-right: 1px solid rgb(231, 235, 240);
  padding: 12px 10px 31px;
`
export const NavLink = styled(_NavLink)`
  display: flex;
  color: #3E4050;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  font-size: .875rem;
  font-weight: 500;
  padding-left: 13px;
  height: 27px;
  margin: 4px 0;
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  :hover {
    color: rgb(29, 29, 29);
    background-color: rgb(243, 246, 249);
  }
  &[aria-current="page"] {
    color: rgb(0, 114, 229);
    background-color: rgb(240, 247, 255);
  }
`