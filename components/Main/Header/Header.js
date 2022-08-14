import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <div></div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  height: 87vh;
  margin: 0 10%;
  background-image: linear-gradient(
      0deg,
      rgba(200, 16, 46, 1) 0%,
      rgba(200, 16, 46, 0) 100%
    ),
    url("https://i.le360.ma/le360sport/sites/default/files//assets/images/2022/05-reda/32bl3m2-preview.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
`;

export default Header;
