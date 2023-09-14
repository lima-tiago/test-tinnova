"use client";
import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-scrolling: touch;
    background: #ffffff;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 16px;

  form {
    width: 600px;
    max-width: 100%;

    > div {
      width: 100%;
    }

    > button {
      width: 100%;
      margin: 24px 0;
    }
  }
`;

export default GlobalStyle;
