import React from 'react'
import styled from 'styled-components'
import TitleBanner from './TitleBanner'

const Card = ({ children, style, title, description }) => (
  <Wrapper style={{ ...style }}>
    <TitleBanner title={title} description={description} />
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding: 0 2% 2% 2%;
  border-radius: 5px;
  user-select: none;
`

export default Card
