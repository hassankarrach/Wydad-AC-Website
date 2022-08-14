import React, { useState } from "react";
import styled from "styled-components";

import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

function login() {
  const [SignInUpAcif, setSignInUpAcif] = useState(0);
  const [IsTheFieldOkey, setIsTheFieldOkey] = useState(2);
  const [isPasswordVisible, setisPasswordVisible] = useState(0);
  return (
    <StyledLogin>
      <div className="FormHolder">
        <div className="TitleHolder">
          <h1>Login Form</h1>
        </div>

        <div className="SignUpSignIn">
          <div
            className={`SignIn ${SignInUpAcif === 0 ? "actif" : ""}`}
            onClick={() => {
              setSignInUpAcif(0);
            }}
          >
            Sign In
          </div>
          <div
            className={`SignUp ${SignInUpAcif === 1 ? "actif" : ""}`}
            onClick={() => {
              setSignInUpAcif(1);
            }}
          >
            Sign Up
          </div>
        </div>

        <div class="form-inner">
          {SignInUpAcif === 0 ? (
            <form action="#">
              <div className="FieldHolder">
                <div className="IconHolder">
                  <PersonIcon className="FieldIcon" />
                </div>
                <input
                  id="Email"
                  className="InputItem"
                  type="text"
                  placeholder="Email"
                />
                {IsTheFieldOkey === 1 ? (
                  <CheckIcon className="TrueIcon" />
                ) : IsTheFieldOkey === 0 ? (
                  <ClearIcon className="FalseIcon" />
                ) : (
                  ""
                )}
              </div>

              <div className="FieldHolder">
                <div className="IconHolder">
                  <HttpsIcon className="FieldIcon" />
                </div>
                <input
                  id="Password"
                  className="InputItem"
                  type={`${isPasswordVisible === 0 ? "password" : "text"}`}
                  placeholder="Password"
                />
                {isPasswordVisible === 0 ? (
                  <VisibilityOffIcon
                    className="PswIcon"
                    onClick={() => {
                      setisPasswordVisible(1);
                    }}
                  />
                ) : isPasswordVisible === 1 ? (
                  <VisibilityIcon
                    className="PswIcon"
                    onClick={() => {
                      setisPasswordVisible(0);
                    }}
                  />
                ) : (
                  ""
                )}
              </div>

              <button>Log In</button>
            </form>
          ) : (
            <form action="#" class="signup">
              <div className="FieldHolder">
                <div className="IconHolder">
                  <PersonIcon className="FieldIcon" />
                </div>
                <input
                  id="FirstName"
                  className="InputItem"
                  type="text"
                  placeholder="First Name"
                />
                {IsTheFieldOkey === 1 ? (
                  <CheckIcon className="TrueIcon" />
                ) : IsTheFieldOkey === 0 ? (
                  <ClearIcon className="FalseIcon" />
                ) : (
                  ""
                )}
              </div>

              <div className="FieldHolder">
                <div className="IconHolder">
                  <PersonIcon className="FieldIcon" />
                </div>
                <input
                  id="LastName"
                  className="InputItem"
                  type="text"
                  placeholder="Last Name"
                />
                {IsTheFieldOkey === 1 ? (
                  <CheckIcon className="TrueIcon" />
                ) : IsTheFieldOkey === 0 ? (
                  <ClearIcon className="FalseIcon" />
                ) : (
                  ""
                )}
              </div>

              <div className="FieldHolder">
                <div className="IconHolder">
                  <PersonIcon className="FieldIcon" />
                </div>
                <input
                  id="Email"
                  className="InputItem"
                  type="text"
                  placeholder="Email"
                />
                {IsTheFieldOkey === 1 ? (
                  <CheckIcon className="TrueIcon" />
                ) : IsTheFieldOkey === 0 ? (
                  <ClearIcon className="FalseIcon" />
                ) : (
                  ""
                )}
              </div>

              <div className="FieldHolder">
                <div className="IconHolder">
                  <HttpsIcon className="FieldIcon" />
                </div>
                <input
                  id="Password"
                  className="InputItem"
                  type={`${isPasswordVisible === 0 ? "password" : "text"}`}
                  placeholder="Password"
                />
                {isPasswordVisible === 0 ? (
                  <VisibilityOffIcon
                    className="PswIcon"
                    onClick={() => {
                      setisPasswordVisible(1);
                    }}
                  />
                ) : isPasswordVisible === 1 ? (
                  <VisibilityIcon
                    className="PswIcon"
                    onClick={() => {
                      setisPasswordVisible(0);
                    }}
                  />
                ) : (
                  ""
                )}
              </div>

              <div className="FieldHolder">
                <div className="IconHolder">
                  <HttpsIcon className="FieldIcon" />
                </div>
                <input
                  id="RePassword"
                  className="InputItem"
                  type={`${isPasswordVisible === 0 ? "password" : "text"}`}
                  placeholder="repeat password"
                />
                {isPasswordVisible === 0 ? (
                  <VisibilityOffIcon
                    className="PswIcon"
                    onClick={() => {
                      setisPasswordVisible(1);
                    }}
                  />
                ) : isPasswordVisible === 1 ? (
                  <VisibilityIcon
                    className="PswIcon"
                    onClick={() => {
                      setisPasswordVisible(0);
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="FieldHolder">
                <input
                  type="file"
                  id="Avatar"
                  name="Profile Picture"
                  className="InputItem"
                ></input>
              </div>

              <button>Sign up</button>
            </form>
          )}
        </div>
      </div>
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  .FormHolder {
    width: 500px;
    text-align: center;
    height: 80%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid rgba(218, 223, 225, 0.5);
    padding: 20px;
    position: relative;

    .TitleHolder {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .SignUpSignIn {
      height: 45px;
      width: 100%;
      display: flex;
      border: 1px solid rgba(218, 223, 225, 0.5);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 40px;

      .SignUp,
      .SignIn {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .SignUp.actif,
      .SignIn.actif {
        background-color: var(--Red);
      }
    }

    .form-inner {
      width: 100%;
      button {
        width: 100%;
        padding: 15px;
        border-radius: 4px;
        background-color: var(--Red);
        border: none;
        color: white;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        &:hover {
          background-color: #b90f2b;
        }
      }

      .FieldHolder {
        background-color: #fafafa;
        width: 100%;
        border: 1px solid #e7e7e7;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        transition: 0.2s ease-in-out;
        &:hover {
          .IconHolder .FieldIcon {
            color: var(--Red);
          }
        }
        .IconHolder {
          height: 100%;
          padding: 8px;
          border-right: 1px solid #e7e7e7;
          background-color: white;
          border-radius: 4px;
          border-left: 3px solid var(--Red);

          display: flex;
          align-items: center;
          justify-content: center;

          .FieldIcon {
            color: var(--grey);
          }
        }

        .InputItem {
          width: 100%;
          height: 30px;
          border: none;
          background: none;
          color: var(--grey);
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
          padding: 10px;
        }

        .InputItem:active,
        .InputItem:focus,
        .InputItem:hover {
          outline: none;
        }

        .FalseIcon,
        .TrueIcon {
          margin-right: 10px;
        }

        .TrueIcon {
          color: green;
        }
        .FalseIcon {
          color: var(--Red);
        }
        .PswIcon {
          color: var(--grey);
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }
  }
`;

export default login;
