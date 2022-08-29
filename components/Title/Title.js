import styled from "styled-components";
import Link from "next/link";
//Icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SectionTitle({ text, show, href }) {
  return (
    <StyledSectionTitle className="TtleSectionAnimation">
      <h1>{text}</h1>
      {show ? (
        <Link href={href}>
          <div className="ViewMore">
            <span>View More</span>
            <ArrowForwardIosIcon className="IconView" fontSize={"20"} />
          </div>
        </Link>
      ) : (
        ""
      )}
    </StyledSectionTitle>
  );
}

const StyledSectionTitle = styled.div`
  padding: 0px 10%;
  width: 100%;
  display: flex;
  align-items: center;

  h1 {
    font-family: "Lemon/Milk light", sans-serif;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    font-size: 2rem;
    padding: 20px 0px;
    color: #2a2a2a;
    @media (max-width: 768px) {
      font-size: 1.9rem;
    }
  }

  .ViewMore {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      color: var(--Red);
    }

    span {
      white-space: nowrap;
      margin-right: 5px;
      font-weight: 100;
    }
  }
  /* h1:after {
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 20%;
   }

   h1:after {
    left: 0.5em;
    margin-right: -50%;
   } */
`;

export default SectionTitle;
