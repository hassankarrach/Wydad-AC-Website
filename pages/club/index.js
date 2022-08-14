import styled from "styled-components";
import SubNav from "../../components/Navbar/SubNav";

const SubNavList = [
  {
    title: "history",
  },
  {
    title: "Management",
  },
  {
    title: "wydad presidents",
  },
  {
    title: "Partners",
  },
  {
    title: "supporters",
  },
];

function football() {
  return (
    <StyledFootball>
      <SubNav Items={SubNavList} />
    </StyledFootball>
  );
}

const StyledFootball = styled.div`
  height: 100vh;
`;

export default football;
