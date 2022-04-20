import styled from 'styled-components';

export const MainContainer = styled.div`
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 125px 1240px;
    justify-content: center;
    gap: 36px;
  }
`;

export const SecondaryContainer = styled.div`
  margin: 24px 16px 61px;
  max-width: 1240px;

  @media (min-width: 768px) {
    margin: 32px 24px 51px;
  }

  @media (min-width: 1440px) {
    margin: 64px 0;
  }
`;
