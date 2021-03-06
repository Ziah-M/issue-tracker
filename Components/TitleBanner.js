import React from 'react'
import styled from 'styled-components'

const TitleBanner = ({ title = '', description = '' }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
)

const Wrapper = styled.div`
  /* ORANGE -> CHOCOLATE */
  background: rgb(255, 165, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 165, 0, 1) 15%,
    rgba(210, 105, 30, 1) 100%
  );
  color: white;
  width: 100%;
  height: 60px;
  transform: translateY(-20px) scaleX(0.95);
  border-radius: 5px;
  user-select: none;
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 400;
  width: 100%;
  text-transform: capitalize;
  margin-left: 10px;
  overflow: hidden;
  line-height: 33px;
`

const Description = styled.div`
  font-size: 14px;
  margin-left: 20px;
  width: 100%;
  overflow: hidden;
  line-height: 20px;
`

export default TitleBanner
