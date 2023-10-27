import styled from 'styled-components';

import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Title = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
`;

export const FormField = styled(Field)`
  width: 250px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 3px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;

export const Button = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  margin-right: auto;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: #3f51b5;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
