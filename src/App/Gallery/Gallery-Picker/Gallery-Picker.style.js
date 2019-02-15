import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  img {
    cursor: pointer;
    border-radius: 2px;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 95%;
    border: .5px solid black;
  }
  img:hover {
    border-color: #e77600;
    box-shadow: 0px 0px 2px 1px #e77600;
  }
  img.selected {
    border-color: #e77600;
    box-shadow: 0px 0px 2px 1px #e77600;
  }
`;
