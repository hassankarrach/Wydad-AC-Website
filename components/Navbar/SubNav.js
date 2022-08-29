import React from "react";
import styled from "styled-components";

function SubNav({ Items }) {
  return (
    <StyledSubNav>
      {Items.map((item) => {
        return <li>{item.title}</li>;
      })}
    </StyledSubNav>
  );
}

const StyledSubNav = styled.div`
  margin-top: 70px;
  height: 50px;
  top: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 10%;
  background-color: #f0f0f0;
  border-bottom: 1px solid #eaeaea;
  z-index: 3;
  li {
    list-style: none;
    margin-right: 30px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    color: var(--grey);
    &:hover {
      color: var(--Red);
    }
  }
`;

export default SubNav;
