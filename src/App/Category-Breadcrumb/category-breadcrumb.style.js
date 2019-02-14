import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  font-family: lato, sans-serif;
  padding-left: 15px;
  width: 98%;
  min-height: 20px;
  display: flex;
  flex-direction: column;
  a {
    font-size: 9px;
    text-decoration: none;
    color: #555;
  }
  a:hover {
    color: #c45500;
    text-decoration: underline;
  }
`;
