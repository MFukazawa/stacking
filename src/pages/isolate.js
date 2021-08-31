import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Medal from '../components/Medal';

const Isolate = () => {
  return (
    <div>
      <MedalContainer>
        <Card>
          <Medal silver>Second Prize</Medal>
        </Card>
        <Card>
          <Medal gold>First Prize</Medal>
        </Card>
        <Card>
          <Medal>Third Prize</Medal>
        </Card>
      </MedalContainer>
      <p>
        Box shadows by{' '}
        <a href='https://tobiasahlin.com/blog/layered-smooth-box-shadows/'>
          Tobias Ahlin
        </a>
      </p>
      <p>
        Medals by{' '}
        <a href='https://codepen.io/ViRPo/pen/WNNoRKB?editors=1100'>
          Peter Hraska
        </a>
      </p>
    </div>
  );
};

const MedalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Isolate;
