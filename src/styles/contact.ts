import styled from "styled-components";

const PrimaryColor = "#f7c343";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;

  @media (min-width: 768px) {
    flex-direction: row;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 10px auto;

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  width: 100%;
  box-sizing: border-box;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: ${PrimaryColor};
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;

  &:hover {
    background-color: darken(${PrimaryColor}, 10%);
  }
`;
