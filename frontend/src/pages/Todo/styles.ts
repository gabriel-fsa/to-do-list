import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  max-height: calc(100vh - 50px);
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
