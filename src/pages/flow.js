import React, { useState } from 'react'
import styled from "styled-components";

const Flow = () => {
  const [negativeMargin, setNegativeMargin] = useState(50)
  return (
      <MainContent>
        <FlowContainer>
          <BoxTwo>2</BoxTwo>
          <BoxOne style={{ marginTop: `-${negativeMargin}px`}}>1</BoxOne>
        </FlowContainer>

        <InputContainer>
          <label>ネガティブマージン</label>
          <input type="range" value={negativeMargin} onChange={(e) => setNegativeMargin(e.target.value)} />
          <p>{-negativeMargin}px</p>
        </InputContainer>
      </MainContent>
  )
}

const FlowContainer = styled.section`
  height: 200px;
  margin: 0 auto 50px;
`

const FlowBox = styled.div`
  width: 100px;
  height: 100px;
  border: 3px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`

const BoxOne = styled(FlowBox)`
  background: hsl(271deg 56% 33%);
  color: #fff;
  /* position: relative; */
  /* z-index: 1; */
`

const BoxTwo = styled(FlowBox)`
  margin: 0 0 0 50px;
  background: hsl(41deg 98% 57%);
  /* position: relative; */
`

const MainContent = styled.main`
  display: block;
  width: fit-content;
  margin: 0 auto;
  padding: 64px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Flow
