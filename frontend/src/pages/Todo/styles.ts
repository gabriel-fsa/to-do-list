import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 30px auto;
  background-color: #4527a0;
  overflow: auto;
  min-height: 500px;
  max-height: calc(100vh - 300px);
  border: 2px solid chartreuse;
  padding: 30px;
  border-radius: 10px;

  h1,
  div {
    margin: 0 auto;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`
