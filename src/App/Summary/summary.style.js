import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  width: 48%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  font-family: "Lato", serif;
`;

export const Title = styled.div`
  h5 {
    font-size: 21px;
    margin: 0px;
  }
  p {
    font-size: 13px;
    margin-top: 1px;
    margin-bottom: 1px;
    span {
      color: #0066c0;
    }
  }
`;
