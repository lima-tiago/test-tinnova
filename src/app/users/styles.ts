import { styled } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 16px;
  margin: 0 auto;
`;

export const UsersList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;

  h1 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 8px;
  }
`;

export const Title = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 40px 40px;
  gap: 8px;

  h1 {
    font-size: 1.5em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  button {
    min-width: max-content;
    padding: 8px;
    border-radius: 50%;
    width: 40px;
    height: 40px;

    &:last-child {
      background: #eb4a46;
    }
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ButtonsModal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 16px 0 0 0;
`;
