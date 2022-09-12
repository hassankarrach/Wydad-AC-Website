import React from "react";
import styled from "styled-components";

function Header({ img, text }) {
  return (
    <StyledBanner
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(200,16,46,1) 0%, rgba(200,16,46,0) 100%), url(${img})`,
      }}
    >
      <h1>{text}</h1>
    </StyledBanner>
  );
}

const StyledBanner = styled.div`
  width: 100%;
  height: 250px;
  margin-top: 64px;
  padding: 20px;
  background-position: center;
  background-size: cover;
  background-position-y: 15%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export default Header;
