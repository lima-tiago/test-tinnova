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
