/** @format */

import styled from 'styled-components';

export const TotalContainer = styled.div`
  width: 67%;
  margin-left: 3%;
  margin-top: 2.3%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 1000px) {
    margin-left: 5%;
    margin-top: 45%;
    width: 90%;
    height: 45%;
    display: flex;
    flex-direction: column;
  }
`;
