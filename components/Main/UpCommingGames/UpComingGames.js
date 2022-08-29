import React from "react";
import styled from "styled-components";
import Card from "./Card";

function UpComingGames() {
  return <StyledUpComingGames></StyledUpComingGames>;
}

const StyledUpComingGames = styled.div`
  height: 600px;
  background-color: var(--Red);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default UpComingGames;
