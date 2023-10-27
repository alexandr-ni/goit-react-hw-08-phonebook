import styled from 'styled-components';

import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 8px;
  margin-bottom: 12px;
  padding: 10px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
`;

export const FormField = styled(Field)`
  width: 100%;
  flex-grow: 1;
  padding: 8px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
  resize: none;
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;

export const Button = styled.button`
  height: 40px;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  padding: 0 8px;
  border-radius: 4px;
  background-color: #3f51b5;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #303f9f;
    box-shadow: 0 0 0 3px lightskyblue;
  }
  &:focus {
    background-color: green;
  }
  &:active {
    background-color: green;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
