import styled from 'styled-components'

interface ButtonProps {
  variants: {
    border: string
    boxShadow: string
    backgroundColor: string
    color: string
    hoverBorderColor: string
    hoverBackgroundColor: string
    hoverBoxShadow: string
  }
  size: {
    fontSize: string
    padding: string
  }
  fullWidth?: boolean
}
export const Button = styled.button<ButtonProps>`
  user-select: none;
  min-width: 64px;
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
  letter-spacing: 0.02857em;
  border: ${({ variants: { border } }) => border};
  box-shadow: ${({ variants: { boxShadow } }) => boxShadow};
  background-color: ${({ variants: { backgroundColor } }) => backgroundColor};
  border-radius: 4px;
  color: ${({ variants: { color } }) => color};
  font-weight: 500;
  font-size: ${({ size: { fontSize } }) => fontSize};
  padding: ${({ size: { padding } }) => padding};
  letter-spacing: 0.02857em;
  transition: background-color 250ms
    cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  & > svg {
    :last-child {
      font-size: 20px;
      margin-right: -4px;
      margin-left: 8px;
    }
    :first-child {
      font-size: 20px;
      margin-right: 8px;
      margin-left: -4px;
    }
  }
  &:hover {
    border-color: ${({ variants: { hoverBorderColor } }) => hoverBorderColor};
    background-color: ${({ variants: { hoverBackgroundColor } }) => hoverBackgroundColor};
    box-shadow: ${({ variants: { hoverBoxShadow } }) => hoverBoxShadow};
  }
  &:disabled {
    cursor: default;
    box-shadow: none;
    pointer-events: none;
    color: rgba(0, 0, 0, 0.26);
  }
`
