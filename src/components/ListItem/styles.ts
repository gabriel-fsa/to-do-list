import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  height: 32px;
  width: 100%;
  background-color: #351c81;
  border-radius: 20px;

  cursor: pointer;

  label {
    width: 100%;
    padding-left: 10px;
    color: white;
  }
  label > a {
    display: inline-block;
    color: white;
    width: 100%;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  width: 60px;
  background-color: #2c1573;
  border-radius: 20px;
  margin-right: 5px;
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-left: 10px;
  cursor: pointer;
`
