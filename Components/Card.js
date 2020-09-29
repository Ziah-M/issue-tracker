import React from "react";
import TitleBanner from "./TitleBanner";
import styled from "styled-components";

const Card = ({ children, style, title, description }) => {
  return (
    <Wrapper style={{ ...style }}>
      <TitleBanner title={title} description={description} />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  user-select:none;
`;

export default Card;
