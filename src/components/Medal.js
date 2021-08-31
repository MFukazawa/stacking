import React from 'react';
import styled from 'styled-components';

const Medal = ({ children, gold, silver }) => {
  return (
    <>
    <MedalBase>
      <MedalCircle gold={gold} silver={silver}>
      </MedalCircle>
      <RibbonLeft></RibbonLeft>
      <RibbonRight></RibbonRight>
    </MedalBase>
    <div>{children}</div>
    </>
  );
};

const MedalBase = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

const goldColor = '#f9ad0e';
const silverColor = '#d1d7da';
const bronzeColor = '#df7e08';

const MedalCircle = styled.div`
  font-size: 28px;
  font-weight: 500;
  width: 56px;
  height: 56px;
  border-radius: 100%;
  color: white;
  text-align: center;
  line-height: 46px;
  vertical-align: middle;
  position: relative;
  border-width: 0.2em;
  border-style: solid;
  z-index: 1;
  box-shadow: inset 0 0 0 ${p => p.gold ? '#b67d05' : p.silver ? '#a7b2b8' : '#955405'}, 2px 2px 0 rgb(0 0 0 / 8%);
  border-color: ${(p) =>
    p.gold ? '#fadd40' : p.silver ? '#edeff1' : '#f7bb23'};
  text-shadow: 0 0 4px ${(p) => (p.gold ? '#9d6c04' : p.silver ? '#98a6ad' : '#7d4604')};
  background: linear-gradient(
    to bottom right,
    ${(p) => (p.gold ? goldColor : p.silver ? silverColor : bronzeColor)} 50%,
    ${(p) => (p.gold ? '#e89f06' : p.silver ? '#c3cbcf ' : '#c67007')} 50%
  );
`;

const Ribbon = styled.div`
  content: '';
  display: block;
  position: absolute;
  border-style: solid;
  border-width: 6px 10px;
  width: 0;
  height: 20px;
  top: 50px;
`;

const RibbonLeft = styled(Ribbon)`
  border-color: #fc402d #fc402d transparent #fc402d;
  left: 8px;
  transform: rotate(20deg) translateZ(-32px);
`;

const RibbonRight = styled(Ribbon)`
  left: 28px;
  border-color: #f31903 #f31903 transparent #f31903;
  transform: rotate(-20deg) translateZ(-48px);
`;

export default Medal;
