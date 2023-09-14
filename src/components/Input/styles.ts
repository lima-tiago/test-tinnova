import { styled } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  min-width: 300px;
  width: max-content;
  margin-bottom: 8px;
  label {
    // Mudei a cor da fonte pois a cor recomendada (#efeeed) estava quase invisível
    color: #333333;
    position: absolute;
    display: flex;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto 0;
    pointer-events: none;
    height: max-content;
    font-size: 16px;
    transition: font-size 0.3s, transform 0.3s;
  }

  input {
    padding: 16px 0 8px;
    border: none;
    background: none;
    // Mudei a cor da borda pois a cor recomendada (#efeeed) estava quase invisível
    border-bottom: 2px solid #333333;
    color: #333333;
    border-radius: 0;
    box-shadow: none;
    outline: none;
    width: 100%;
    font-size: 16px;
    transition: border 0.3s;
    margin-bottom: 16px;

    & ~ span {
      position: absolute;
      left: 0;
      bottom: 0;
      font-size: 10px;
      color: #eb4a46;
      opacity: 0;
      transition: opacity 0.3s;
    }

    &:invalid {
      border-color: #eb4a46;
      & ~ span {
        opacity: 1;
      }
    }

    &:focus,
    &:not(:placeholder-shown) {
      & ~ label {
        transform: translate(0, -30px);
        font-size: 12px;
      }
    }
  }
`;
