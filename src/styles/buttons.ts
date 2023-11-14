import styled from "styled-components";

const Button = styled.div`
  width: 120px;
  display: flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  font-weight: 600;

  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
`;

export const PrimaryButton = styled(Button)`
  background: #eee;
  color: #5b5b5b;
  &:hover {
    color: #f7c343;
  }
`;

export const SecondaryButton = styled(Button)`
  background: #474658;
  color: #fff;
  &:hover {
    color: #f7c343;
  }
`;
