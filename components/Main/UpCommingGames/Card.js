import React from "react";
import styled from "styled-components";

function Card() {
  return <StyledCard>Card</StyledCard>;
}

const StyledCard = styled.div`
  height: 200px;
  width: 340px;
  background-color: white;
  border-radius: 8px;
`;

export default Card;
