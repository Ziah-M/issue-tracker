import React from 'react'
import styled from 'styled-components'

const ContentArea = ({ children }) => <Wrapper>{children}</Wrapper>

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 100vh;
  background: lightgrey;
  padding: 40px 20px;
`

export default ContentArea
