import styled from "styled-components";

function Sponsors() {
  return (
    <StyledSponsors>
      <div className="SponsorsTitleHolder">
        <h1>Our Partners</h1>
      </div>
      <div className="MainSponsors">
        <img
          className="SponsorLogo"
          src="/assets/Media/Logos/Partners/Ingelec.png"
        />
        <img
          className="SponsorLogo"
          src="/assets/Media/Logos/Partners/Macron.png"
        />
      </div>
      <div className="SecPartners">
        <img
          className="SponsorLogo"
          src="/assets/Media/Logos/Partners/Sama.png"
        />
        <img
          className="SponsorLogo"
          src="/assets/Media/Logos/Partners/or.png"
        />
        <img
          className="SponsorLogo"
          src="/assets/Media/Logos/Partners/itkan.png"
        />
        <img
          className="SponsorLogo"
          src="/assets/Media/Logos/Partners/blekis.png"
        />
        <img
          className="SponsorLogo"
          src="/assets/Media/Logos/Partners/bellar.png"
        />
      </div>
    </StyledSponsors>
  );
}

const StyledSponsors = styled.div`
  width: 100%;
  height: 400px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .SponsorsTitleHolder {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: auto;
    color: var(--Red);
    width: 100%;
    height: 150px;
  }
  .MainSponsors {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    .SponsorLogo {
      margin: 10px;
      cursor: pointer;
      opacity: 0.6;
      transition: 0.2s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
  }
  .SecPartners {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    .SponsorLogo {
      margin: 10px;
      cursor: pointer;
      opacity: 0.6;
      transition: 0.2s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export default Sponsors;
