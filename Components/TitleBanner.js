import React from "react";
import styled from "styled-components";

const TitleBanner = ({
  title = "",
  description = "",
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: orange;
  color: white;
  width: 100%;
  height: 60px;
  transform: translateY(-20px) scaleX(0.95);
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 400;
  width: 100%;
  text-transform: capitalize;
  margin-left: 10px;
  overflow: hidden;
  line-height: 33px;
`;

const Description = styled.div`
  font-size: 14px;
  margin-left: 20px;
  width: 100%;
  overflow: hidden;
  line-height: 20px;
`;

export default TitleBanner;
