import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 177px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: lato, sans-serif;
  font-size: 9px;
  padding: 8px;
  opacity: 1;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,.13);
  overflow: hidden;
  border: 1px solid #cdcdcd;
  border-color: rgba(0,0,0,.2);
  div.row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-bottom: 1px;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;

export const Bar = styled.div`
  width: 122px;
  height: 17px;
  border-radius: 1px;
  background: linear-gradient(to bottom,#eee,#f6f6f6);
  background-color: #f3f3f3;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.25), 
              inset 0 -1px 0 rgba(0,0,0,.05);
  display: flex;
  flex-direction: row;
  align-items: center;
  div.color {
    border-radius: 1px;
    background: linear-gradient(to bottom,#ffce00,#ffa700);
    background-color: #ffce00;
    transition: width .5s ease;
    float: left;
    font-size: 0;
    height: 100%;
    width: 0;
    box-sizing: border-box;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.25), inset 0 -1px 0 rgba(0,0,0,.05);
  }
`;
