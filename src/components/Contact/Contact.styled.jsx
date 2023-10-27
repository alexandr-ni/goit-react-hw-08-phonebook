import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 6px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

export const Button = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  margin-left: auto;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: #3f51b5;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #303f9f;
    box-shadow: 0 0 0 3px lightskyblue;
  }
  &:focus {
    background-color: red;
  }
  &:active {
    background-color: red;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
