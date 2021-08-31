import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Medal from '../components/Medal';

const Isolate = () => {
  return (
    <IsolateWrapper>
      <MedalContainer>
        <Card>
          <Medal silver>Second Prize</Medal>
        </Card>
        <Card primary>
          <Medal gold>First Prize</Medal>
        </Card>
        <Card>
          <Medal>Third Prize</Medal>
        </Card>
      </MedalContainer>
      <Credits>
        Box shadows by{' '}
        <a href='https://tobiasahlin.com/blog/layered-smooth-box-shadows/'>
          Tobias Ahlin
        </a>
      </Credits>
      <Credits>
        Medals by{' '}
        <a href='https://codepen.io/ViRPo/pen/WNNoRKB?editors=1100'>
          Peter Hraska
        </a>
      </Credits>
    </IsolateWrapper>
  );
};

const IsolateWrapper = styled.div`
  background: #eee;
  height: 100vh;
  padding: 0 20px;
  isolation: isolate;
`

const Credits = styled.p`
  text-align: center;
  margin: 0 0 10px;
`

const MedalContainer = styled.div`
  display: flex;
  padding: 50px 0;
`;

export default Isolate;
