import styled from "styled-components";
import { FlexCol, FlexRow, PrimaryColor } from "./style";

export const InnerContainer = styled.div`
  ${FlexCol}
  gap: 20px;
  width: 100%;
  max-width: 800px;

  @media (min-width: 768px) {
    ${FlexRow}
  }
`;

export const InfoCard = styled.div`
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
  text-align: start;
  p {
    margin: 8px 0;
    font-size: 16px;
    color: black;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

export const Form = styled.form`
  ${FlexCol}
  width: 100%;
  max-width: 400px;
  margin: 10px auto;

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

const inputStyles = `
  padding: 1rem 1rem;
  font-size: 1.5rem;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.8rem;
  width: 100%;
  max-width: 40rem;
  box-sizing: border-box;
  font-family: Inter;

  &:focus {
    outline: none;
    border-color: ${PrimaryColor};
  }

  &:hover {
    outline: none;
    border-color: ${PrimaryColor};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const TextArea = styled.textarea`
  ${inputStyles}
  padding: 0.5rem 1rem;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  padding: 0.75rem 3.5rem;
  margin: 0.5rem;
  background-color: ${PrimaryColor};
  color: white;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  width: 100%;

  &:hover {
    background-color: darken(${PrimaryColor}, 10%);
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
