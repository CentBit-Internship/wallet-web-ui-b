/** @format */

import styled from 'styled-components';

export const TableContainer = styled.div`
  position: relative;
  width: 63.9%;
  border-radius: 10px;
  height: 34.5%;
  margin-left: 4.5%;
  margin-top: 1.5%;
  border: 2px solid #e6e6e6;

  h1 {
    position: absolute;
    font-size: 17px;
    font-weight: 600;
    left: 3%;
    top: 8%;
  }

  @media (max-width: 1000px) {
    margin-top: 20%;
    margin-bottom: 20%;
    height: 221vh;
    width: 91%;

    h1 {
      position: absolute;
      font-size: 25px;
      font-weight: 600;
      left: 3%;
      top: -2.2%;
    }
  }
`;
