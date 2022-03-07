import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.button`
  background: #ff9000;
  color: #312e38;
  font-weight: 500;
  border-radius: 10px;
  margin-right: 10px;
  margin-left: 10px;
  border: 0;
  padding: 0 16px;
  height: 32px;
  width: 76px;
  white-space: nowrap;
  transition: background 0.2s;
  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`
