import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  width: 100%;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  input {
    height: 100%;
    color: white;
  }

  input::placeholder {
    color: white;
    opacity: 0.6;
  }

  button {
    height: 48px;
    width: 48px;
    background-color: transparent;
    outline: none;
    border: none;
    margin-left: 15px;
    /* margin-right: 15px; */
  }

  .back-icon {
    margin-right: 15px;
  }
`
export const InputWrapper = styled.div`
  height: 61px;
  background-color: #7e57c2;
  border-radius: 20px;

  input {
    background-color: transparent;
    margin: 0 20px;
    outline: none;
    border: none;
  }
`
