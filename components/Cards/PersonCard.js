import React from "react";
import styled from "styled-components";

function ManagementCard({ name, sub, img }) {
  return (
    <StyledManagementCard>
      <div className="ImgHolder">
        <img src={img} />
      </div>
      <div className="CardContent">
        <h1>{name}</h1>
        <h2>{sub}</h2>
      </div>
    </StyledManagementCard>
  );
}

const StyledManagementCard = styled.div`
  width: 250px;
  height: 450px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ebebeb;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  .ImgHolder {
    width: 100%;
    height: 65%;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      position: relative;
    }
  }
  .CardContent {
    padding: 0px 20px;
    height: 35%;
    text-align: left;
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-family: var(--font-secondary);
      font-size: 1.1rem;
      color: var(--grey);
    }
  }
`;

export default ManagementCard;
