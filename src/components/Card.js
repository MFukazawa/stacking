import React from 'react'
import styled from 'styled-components'

const Card = ({children, primary}) => {
  return (
    <CardWrapper primary={primary}>
      {children}
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  max-width: 300px;
  background: #fff;
  padding: 16px 32px;
  margin: ${p => p.primary ? '-32px -16px' : 0};
  position: relative;
  z-index: ${p => p.primary ? 2 : 1};
  /* min-height: 250px; */
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.12),
              0 2px 2px rgba(0,0,0,0.12),
              0 4px 4px rgba(0,0,0,0.12),
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
  flex: ${p => p.primary ? 1.25 : 1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Card
