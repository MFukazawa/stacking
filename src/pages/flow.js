import React, { useState } from 'react'
import styled from "styled-components";

const Flow = () => {
  const [negMargin, setNegMargin] = useState(0)
  return (
      <MainContent>
        <FlowBox>
          <Go />
          <Lakers style={{ marginTop: '-' + negMargin + 'px' }} />
        </FlowBox>

        <div>
          <label>ネガティブマージン</label>
          <input type="range" value={negMargin} onChange={(e) => setNegMargin(e.target.value)} />
        </div>
      </MainContent>
  )
}

const FlowBox = styled.section`
  width: 150px;
  height: 200px;
  outline: 1px solid #000;
`

const Go = styled.div`
  width: 100px;
  height: 100px;
  background: hsl(271deg 56% 33%);
`

const Lakers = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 0 0 50px;
  background: hsl(41deg 98% 57%);
`

const MainContent = styled.main`
  display: block;
  width: fit-content;
  margin: 0 auto;
  padding: 64px;
`;


export default Flow
