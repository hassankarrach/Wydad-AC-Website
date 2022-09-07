import styled from "styled-components";

function Shop() {
  return (
    <StyledShop>
      <div className="ImgHolder">
        <img src={"/assets/Media/Shop/banner.png"} />
      </div>

      <img className="Macron" src={"/assets/Media/Logos/Macron.png"} />

      <button>Shop now</button>
    </StyledShop>
  );
}

const StyledShop = styled.div`
  margin: 0px 10%;
  height: 350px;
  background-color: #cb001c;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 768px) {
    margin: 0px 5%;
  }

  .ImgHolder {
    margin-left: 5%;
    @media (max-width: 768px) {
      margin-left: 0%;
    }
    height: 100%;
    img {
      height: 100%;
    }
  }

  .Macron {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  button {
    position: absolute;
    right: 10%;
    bottom: 45%;
    padding: 8px 30px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 768px) {
      left: 50%;
      transform: translate(-50%, 0);
      bottom: 15%;
      background-color: #cb001c;
      border: none;
    }
  }
`;

export default Shop;
