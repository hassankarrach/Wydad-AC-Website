import React from "react";
import styled from "styled-components";

function partners() {
  return (
    <StyledPartners>
      <div className="MainSponsors">
        <div className="SponsoreLogoHolder">
          <img
            className="SponsorLogo"
            src="/assets/Media/Logos/Partners/Ingelec.png"
          />
        </div>
        <div className="SponsoreLogoHolder">
          <img
            className="SponsorLogo"
            src="/assets/Media/Logos/Partners/Macron.png"
          />
        </div>
      </div>
      <div className="SecPartners">
        <div className="SponsoreLogoHolder">
          <img
            className="SponsorLogo"
            src="/assets/Media/Logos/Partners/Sama.png"
          />
        </div>
        <div className="SponsoreLogoHolder">
          <img
            className="SponsorLogo"
            src="/assets/Media/Logos/Partners/or.png"
          />
        </div>
        <div className="SponsoreLogoHolder">
          <img
            className="SponsorLogo"
            src="/assets/Media/Logos/Partners/itkan.png"
          />
        </div>
        <div className="SponsoreLogoHolder">
          <img
            className="SponsorLogo"
            src="/assets/Media/Logos/Partners/blekis.png"
          />
        </div>
        <div className="SponsoreLogoHolder">
          <img
            className="SponsorLogo"
            src="/assets/Media/Logos/Partners/bellar.png"
          />
        </div>
      </div>
    </StyledPartners>
  );
}

const StyledPartners = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .MainSponsors,
  .SecPartners {
    display: flex;
  }
  .MainSponsors {
    margin-bottom: 10px;
  }
  .MainSponsors .SponsoreLogoHolder,
  .SecPartners .SponsoreLogoHolder {
    background-color: white;
    padding: 10px 20px;
    border: 1px solid #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 0px 2px;
  }
`;

export default partners;
