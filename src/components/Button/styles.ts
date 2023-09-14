import { styled, keyframes } from "styled-components";
import { ButtonProps } from ".";

export const Wrapper = styled.button`
  background: ${({ negative }: ButtonProps) =>
    negative ? "transparent" : "#00c8b3"};
  color: ${({ negative }: ButtonProps) => (negative ? "#eb4a46" : "#ffffff")};
  border-radius: 99px;
  padding: 16px 24px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  min-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s, color 0.3s, background-color 0.3s;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    color: #dddcdc;
    background: #f6f6f6;
  }
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid #fff;
  border-top-color: transparent;
  border-radius: 99px;
  animation: ${rotate} 1s linear infinite;
`;
