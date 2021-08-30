import React from 'react'
import styled from 'styled-components'

const Medal = ({children}) => {
  return (
    <div class="quiz-medal">
      <div class="quiz-medal__circle quiz-medal__circle--gold">
        <span>
          {children}
        </span>
      </div>
      <div class="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
      <div class="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
    </div>
  )
}

const Medal = styled.div`
  position: relative;
  margin-bottom: 16px;
`

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

  // Default colors
  box-shadow: inset 0 0 0 darken(#d1d7da, 15%), 2px 2px 0 rgba(0, 0, 0, 0.08);
  border-color: lighten(adjust-hue(#d1d7da, 10), 10%);
  text-shadow: 2px 2px 0 darken(#d1d7da, 20%);
  background: linear-gradient(to bottom right, #d1d7da 50%, darken(#d1d7da, 5%) 50%);
`

// TODO add props for gold, silver and bronze medals



export default Medal
