import React from 'react'
import styled from "styled-components";

const Stacking = () => {
  return (
    <StackingSection>
      <Banner id="banner">Wow cool banner</Banner>
      <MainContents id="main-relative">
        <StarMax id="star" />
        <FunTimes>CSS is so fun</FunTimes>
      </MainContents>
    </StackingSection>
  )
}

const FunTimes = styled.p`
  text-align: center;
`

const StarSticker = styled.div`
  background: red;
  width: 80px;
  height: 80px;
  position: relative;
  text-align: center;
  margin: 0 auto;
  top: -20px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 80px;
    width: 80px;
    background: red;
  }

  &::before {
    transform: rotate(30deg);
  }

  &::after {
    transform: rotate(60deg);
  }
`

const StarMax = styled(StarSticker)`
  z-index: 9999;
`

const BannerBase = styled.div`
  height: 100px;
  line-height: 100px;
  background: hsl(270deg 29% 92%);
  text-align: center;
`

const Banner = styled(BannerBase)`
  position: relative;
  z-index: 2;
`

const MainContent = styled.main`
  display: block;
  margin: 0 auto;
`;

const MainContents = styled(MainContent)`
  position: relative;
  /* z-index: 1; */
`

const StackingSection = styled.section`
  padding: 100px 0;
  width: 40%;
  margin: 0 auto;
`

export default Stacking