import { styled } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  min-width: 300px;
  width: max-content;
  label {
    // Mudei a cor da fonte pois a cor recomendada (#efeeed) estava quase invisível
    color: #333333;
    position: absolute;
    display: flex;
    top: 0;
    bottom: 0;
    left: 12px;
    margin: auto 0;
    pointer-events: none;
    height: max-content;
    font-size: 16px;
    transition: font-size 0.3s, transform 0.3s;
  }

  input {
    padding: 16px 12px;
    border: none;
    background: none;
    // Mudei a cor da borda pois a cor recomendada (#efeeed) estava quase invisível
    border-bottom: 2px solid #333333;
    color: #333333;
    border-radius: 0;
    box-shadow: none;
    outline: none;
    width: 100%;
    transition: border 0.3s;

    &:invalid {
      color: #eb4a46;
      border-color: #eb4a46;
    }

    &:focus,
    &:not(:placeholder-shown) {
      & ~ label {
        transform: translateY(-20px);
        font-size: 12px;
      }
    }
  }
`;
