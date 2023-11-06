import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
`;
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InputWrapper = styled.div`
  margin-bottom: 15px;
`;
export const Label = styled.div`
  margin-bottom: 10px;
`;
export const InputArea = styled.input`
  width: 400px;
  height: 40px;
  padding: 5px;
`;
export const Error = styled.div`
  color: red;
  font-size: 12px;
  margin: 2px;
`;
export const Button = styled.button`
  width: 400px;
  height: 40px;
  border: none;
  border-radius: 30px;
  background-color: #143c70;
  color: #fff;
  font-weight: 600;
  margin: 10px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }
`;
