/** @format */

import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid: auto-flow / 1fr 6fr;
  flex-direction: row;
  width: 100%;
  height: 100%;

  @media (max-width: 1000px) {
    display: flex;
  }
`;
