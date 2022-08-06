/** @format */

import styled from 'styled-components';

export const TotalContainer = styled.div`
  width: 60%;
  margin-left: 3%;
  margin-top: 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 1000px) {
    margin-left: 5%;
    margin-top: 40%;
    width: 90%;
    height: 45%;
    display: flex;
    flex-direction: column;
  }
`;
