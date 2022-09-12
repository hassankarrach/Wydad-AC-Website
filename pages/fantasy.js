import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header/Header.js";

//icons
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

//Modal
import Modal from "@mui/material/Modal";

function Fantasy() {
  //ModalStats
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //PlayersStats
  const [PlayerPositionClicked, setPlayerPositionClicked] = useState("");
  const SetPlayerPosition = (position) => {
    setPlayerPositionClicked(position);
  };

  return (
    <StyledFantasy>
      <StyledBanner>
        <img src="./assets/Media/Extras/fantasy.jpg"></img>
        <h1></h1>
      </StyledBanner>

      <div className="Container">
        <h1>Pick Team - 7snUw</h1>

        <div className="LeftContainer">
          <div className="GameDet">
            <h3>Gameweek 6 Sat 3 Sep 11:00</h3>
            <img
              className="Pattern"
              src={"./assets/Media/Extras/pattern.png"}
            />
          </div>
          <div className="StadHolder">
            <div className="GoolKeeper">
              <PlayerCard
                position="GoolKeeper"
                handleOpenModal={handleOpen}
                SetPlayer={SetPlayerPosition}
              />
            </div>

            <div className="Defenders">
              <PlayerCard
                position="Defender"
                handleOpenModal={handleOpen}
                SetPlayer={SetPlayerPosition}
              />
              <PlayerCard
                position="Defender"
                handleOpenModal={handleOpen}
                SetPlayer={SetPlayerPosition}
              />
              <PlayerCard
                position="Defender"
                handleOpenModal={handleOpen}
                SetPlayer={SetPlayerPosition}
              />
              <PlayerCard
                position="Defender"
                handleOpenModal={handleOpen}
                SetPlayer={SetPlayerPosition}
              />
            </div>

            <div className="Midfielders">
              <PlayerCard
                position="Midfielder"
                handleOpenModal={handleOpen}
                SetPlayer={SetPlayerPosition}
              />
              <PlayerCard
                position="Midfielder"
                handleOpenModal={handleOpen}
                SetPlayer={SetPlayerPosition}
              />
              <PlayerCard
                position="Midfielder"
                handleOpenModal={handleOpen}
                SetPlayer={SetPlayerPosition}
              />
            </div>

            <div className="strikers">
              <PlayerCard
                position="striker"
                handleOpenModal={handleOpen}
                SetPlayer={SetPlayerPosition}
              />
              <PlayerCard
                position="striker"
                handleOpenModal={handleOpen}
                SetPlayer={SetPlayerPosition}
              />
              <PlayerCard
                position="striker"
                handleOpenModal={handleOpen}
                SetPlayer={SetPlayerPosition}
              />
            </div>
          </div>
          <div className="Bench">
            <div className="PlayerItem">
              <img src={"./assets/Media/Fantasy/FantasyKit.webp"} />
              <div className="PlayerDet">
                <div className="DetTop"></div>
                <div className="DetBottom"></div>
              </div>
            </div>
            <div className="PlayerItem">
              <img src={"./assets/Media/Fantasy/FantasyKit.webp"} />
              <div className="PlayerDet">
                <div className="DetTop"></div>
                <div className="DetBottom"></div>
              </div>
            </div>
            <div className="PlayerItem">
              <img src={"./assets/Media/Fantasy/FantasyKit.webp"} />
              <div className="PlayerDet">
                <div className="DetTop"></div>
                <div className="DetBottom"></div>
              </div>
            </div>
            <div className="PlayerItem">
              <img src={"./assets/Media/Fantasy/FantasyKit.webp"} />
              <div className="PlayerDet">
                <div className="DetTop"></div>
                <div className="DetBottom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <StyledModal>
          <CloseIcon
            className="CloseIcone"
            fontSize="medium"
            onClick={() => {
              handleClose();
            }}
          />

          <Player name="Ahmed Reda" pic="1" />
          <Player name="aissa syoudi" pic="2" />
        </StyledModal>
      </Modal>
    </StyledFantasy>
  );
}

const PlayerCard = ({ handleOpenModal, position, SetPlayer }) => {
  return (
    <StyledPlayerCard
      onClick={() => {
        handleOpenModal();
        SetPlayer(position);
      }}
    >
      <img src={"./assets/Media/Fantasy/addPlayer.webp"} />
      <div className="PlayerDet">
        <div className="DetTop"></div>
        <div className="DetBottom"></div>
      </div>
    </StyledPlayerCard>
  );
};

const Player = ({ name, pic }) => {
  return (
    <StyledPlayer>
      <div className="PhotoHolder">
        <img className="Pattern" src={"./assets/Media/Extras/pattern.png"} />
        <img className="PlayerImg" src={`./assets/Media/Players/${pic}.png`} />
      </div>
      <div className="PlayerName">
        <h1>{name}</h1>
      </div>
      <div className="AddButton">
        <AddIcon />
      </div>
    </StyledPlayer>
  );
};

const StyledFantasy = styled.div`
  padding: 0px 10%;
  @media (max-width: 768px) {
    padding: 0px 2%;
  }

  .Container {
    margin: 20px 0px;
    .LeftContainer {
      width: 55%;
      height: auto;
      border-radius: 10px;
      overflow: hidden;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid #efefef;

      @media (max-width: 768px) {
        width: 100%;
      }

      .GameDet {
        width: 100%;
        height: 80px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        padding: 0px;
        background-color: var(--Red);
        overflow: hidden;
        position: relative;
        border-bottom: 1px solid #efefef;
        h3 {
          color: white;
          z-index: 5;
        }
        .Pattern {
          position: absolute;
          right: 0;
        }
      }

      .StadHolder {
        width: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 700px;
        overflow: hidden;
        background-image: url("/assets/Media/Fantasy/stad.svg");
        background-size: auto 100%;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
        .GoolKeeper,
        .Defenders,
        .Midfielders,
        .strikers {
          width: 100%;
          height: 140px;
          margin: 10px 0px;
          display: flex;
        }

        .GoolKeeper {
          /* margin-bottom: auto; */
        }

        .strikers {
          /* margin-top: auto; */
        }

        .Defenders {
          /* margin-bottom: auto; */
        }

        @media (max-width: 768px) {
          /* min-height: 500px; */
        }
      }
      .Bench {
        width: 100%;
        height: 140px;
        background-color: #f6f6f6;
        margin: 10px 0px;
        display: flex;
        .PlayerItem {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 1 1 0%;
          min-height: 7.6rem;
          position: relative;

          .PlayerDet {
            height: 90px;
            width: 130px;
            border-radius: 4px;
            background-color: white;
          }
          img {
            height: 80%;
            cursor: pointer;
            transition: 0.2s ease-in-out;
            &:hover {
            }
          }
        }
      }
    }
  }
`;

const StyledBanner = styled.div`
  width: 100%;
  height: 300px;
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
  margin-top: 65px;
  img {
    width: 100%;
  }
`;

const StyledModal = styled.div`
  width: 600px;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  outline: none;
  border-radius: 8px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .CloseIcone {
    position: absolute;
    right: 10px;
    top: 10px;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      color: var(--Red);
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const StyledPlayerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;
  min-height: 7.6rem;
  position: relative;

  .PlayerDet {
    height: 90px;
    width: 130px;
    border-radius: 4px;
    background-color: white;
    border: 1px solid #efefef;
  }
  img {
    height: 80%;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
    }
  }
`;

const StyledPlayer = styled.div`
  height: 70px;
  width: 400px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: 4px 0px;

  .PhotoHolder {
    width: 20%;
    height: 100%;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    position: relative;
    .Pattern {
      position: absolute;
      z-index: 1;
    }
    .PlayerImg {
      height: 200%;
      z-index: 2;
    }
  }

  .PlayerName {
    margin-left: 15px;
    h1 {
      font-size: 1.3rem;
    }
  }

  .AddButton {
    margin-left: auto;
    padding: 10px 20px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      color: var(--Red);
    }
  }
`;

export default Fantasy;
