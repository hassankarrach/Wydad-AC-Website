import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";

function MyWydad() {
  return (
    <Link href="/auth">
      <StyledMyWydad>
        <PersonIcon className="MyWydadIcon" />
        <span>My Wydad</span>
      </StyledMyWydad>
    </Link>
  );
}

const StyledMyWydad = styled.button`
  padding: 10px 18px;
  background-color: var(--Red);
  border: none;
  color: white;
  cursor: pointer;
  height: 40px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  transition: 0.2s ease-in-out;
  border: 1px solid #b30929;

  font-family: var(--font-secondary);

  @media (max-width: 768px) {
    padding: 5px 8px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background-color: #ba0023;
    @media (max-width: 768px) {
      color: white;
    }
  }
  .MyWydadIcon {
    margin-right: 5px;
    @media (max-width: 768px) {
      margin-right: 0px;
    }
  }
`;

export default MyWydad;
