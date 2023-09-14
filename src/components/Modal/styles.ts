import { styled } from "styled-components";
import { Card } from "..";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  z-index: 99;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 1;
`;

export const Body = styled(Card)`
  width: 600px;
  max-width: calc(100% - 32px);
  position: fixed;
  z-index: 9;

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
