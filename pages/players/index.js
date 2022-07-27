import { useEffect, useState } from 'react'

import styled from 'styled-components'
import {PlayersData} from '../../data/Players'


function index() {
  const [ActiveTag,setActiveTag]= useState('All');

  const FilterPlayersByPosition = (Position) =>{
    return(
      PlayersData.filter((Player)=>{
        return Player.Position == Position
      })
    )
  }

  return (
    <>
    <StyledBanner>
      <h1>Wydad Players</h1>
    </StyledBanner>
    <StyledFilterHolder>
      <div className='PlayersFilter'>
        <ul>
          <li>All</li>
          <li>Goalkeepers</li>
          <li>Defenders</li>
          <li>Midfielders</li>
          <li>Forwards</li>
        </ul>
      </div>
    </StyledFilterHolder>
    
    <StyledContainer>

       <div className='Container'>
       {
          FilterPlayersByPosition('Goalkeeper').map((Player)=>{
            return(
              <StyledCard key={Player.id}>
              <div className='TopStyledCard'>
                <img className='img' src='./assets/Media/Pre.png'/>
              </div>
              <div className='BottomStyledCard'>
                <h1>{Player['Full Name']}</h1>
                <h3>{Player.Position}</h3>
              </div>
              <div className='NumberStyledCard'>
                <h1>{Player.Number}</h1>
              </div>
            </StyledCard>
            )
          })
       }
       </div>

       <div className='Container'>
       {
          FilterPlayersByPosition('Centre-Back').map((Player)=>{
            return(
              <StyledCard key={Player.id}>
              <div className='TopStyledCard'>
                <img className='img' src='./assets/Media/Pre.png'/>
              </div>
              <div className='BottomStyledCard'>
                <h1>{Player['Full Name']}</h1>
                <h3>{Player.Position}</h3>
              </div>
              <div className='NumberStyledCard'>
                <h1>{Player.Number}</h1>
              </div>
            </StyledCard>
            )
          })
       }
       </div>

       <div className='Container'>
       {
          FilterPlayersByPosition('Left-Back').map((Player)=>{
            return(
              <StyledCard key={Player.id}>
              <div className='TopStyledCard'>
                <img className='img' src='./assets/Media/Pre.png'/>
              </div>
              <div className='BottomStyledCard'>
                <h1>{Player['Full Name']}</h1>
                <h3>{Player.Position}</h3>
              </div>
              <div className='NumberStyledCard'>
                <h1>{Player.Number}</h1>
              </div>
            </StyledCard>
            )
          })
        }
       </div>

       <div className='Container'>
       {
          FilterPlayersByPosition('Right-Back').map((Player)=>{
            return(
              <StyledCard key={Player.id}>
              <div className='TopStyledCard'>
                <img className='img' src='./assets/Media/Pre.png'/>
              </div>
              <div className='BottomStyledCard'>
                <h1>{Player['Full Name']}</h1>
                <h3>{Player.Position}</h3>
              </div>
              <div className='NumberStyledCard'>
                <h1>{Player.Number}</h1>
              </div>
            </StyledCard>
            )
          })
        }
       </div>

       <div className='Container'>
       {
          FilterPlayersByPosition('Defensive Midfield').map((Player)=>{
            return(
              <StyledCard key={Player.id}>
              <div className='TopStyledCard'>
                <img className='img' src='./assets/Media/Pre.png'/>
              </div>
              <div className='BottomStyledCard'>
                <h1>{Player['Full Name']}</h1>
                <h3>{Player.Position}</h3>
              </div>
              <div className='NumberStyledCard'>
                <h1>{Player.Number}</h1>
              </div>
            </StyledCard>
            )
          })
        }
       </div>

       <div className='Container'>
       {
          FilterPlayersByPosition('Central Midfield').map((Player)=>{
            return(
              <StyledCard key={Player.id}>
              <div className='TopStyledCard'>
                <img className='img' src='./assets/Media/Pre.png'/>
              </div>
              <div className='BottomStyledCard'>
                <h1>{Player['Full Name']}</h1>
                <h3>{Player.Position}</h3>
              </div>
              <div className='NumberStyledCard'>
                <h1>{Player.Number}</h1>
              </div>
            </StyledCard>
            )
          })
        }
       </div>

       <div className='Container'>
       {
          FilterPlayersByPosition('Attacking Midfield').map((Player)=>{
            return(
              <StyledCard key={Player.id}>
              <div className='TopStyledCard'>
                <img className='img' src='./assets/Media/Pre.png'/>
              </div>
              <div className='BottomStyledCard'>
                <h1>{Player['Full Name']}</h1>
                <h3>{Player.Position}</h3>
              </div>
              <div className='NumberStyledCard'>
                <h1>{Player.Number}</h1>
              </div>
            </StyledCard>
            )
          })
        }
       </div>

       <div className='Container'>
       {
          FilterPlayersByPosition('Left Winger').map((Player)=>{
            return(
              <StyledCard key={Player.id}>
              <div className='TopStyledCard'>
                <img className='img' src='./assets/Media/Pre.png'/>
              </div>
              <div className='BottomStyledCard'>
                <h1>{Player['Full Name']}</h1>
                <h3>{Player.Position}</h3>
              </div>
              <div className='NumberStyledCard'>
                <h1>{Player.Number}</h1>
              </div>
            </StyledCard>
            )
          })
        }
       </div>

       <div className='Container'>
       {
          FilterPlayersByPosition('Right Winger').map((Player)=>{
            return(
              <StyledCard key={Player.id}>
              <div className='TopStyledCard'>
                <img className='img' src='./assets/Media/Pre.png'/>
              </div>
              <div className='BottomStyledCard'>
                <h1>{Player['Full Name']}</h1>
                <h3>{Player.Position}</h3>
              </div>
              <div className='NumberStyledCard'>
                <h1>{Player.Number}</h1>
              </div>
            </StyledCard>
            )
          })
        }
       </div>

       <div className='Container'>
       {
          FilterPlayersByPosition('Centre-Forward').map((Player)=>{
            return(
              <StyledCard key={Player.id}>
              <div className='TopStyledCard'>
                <img className='img' src='./assets/Media/Pre.png'/>
              </div>
              <div className='BottomStyledCard'>
                <h1>{Player['Full Name']}</h1>
                <h3>{Player.Position}</h3>
              </div>
              <div className='NumberStyledCard'>
                <h1>{Player.Number}</h1>
              </div>
            </StyledCard>
            )
          })
        }
       </div>
    </StyledContainer>

    </>
  )
}


const StyledBanner = styled.div`
width : 100%;
height: 250px;
background-image :  linear-gradient(0deg, rgba(200,16,46,1) 0%, rgba(200,16,46,0) 100%), url('./assets/Media/Header/TheFamily.jpg');
background-position :center;
background-size :cover;
background-position-y: 68%;
color : white;
display : flex;
justify-content : center;
align-items : center;
`

const StyledFilterHolder = styled.div`
 width :100%;
 height : 100px;
 position : relative;
 display :flex;
 justify-content :center;
 align-items : center;
 .PlayersFilter{
  width :100%;
  width :80%;
  background-color : white;
  height : 100px;
  position : absolute;
  top : -50%;
  border-radius : 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 1px 10px 0px;
  display : flex;
  justify-content :center;
  align-items :center;
  ul{
    list-style-type: none;
    display : flex;
    li{
      margin : 15px;
      cursor : pointer;
      transition : 0.2s ease-in-out;
      &:hover{
        color : var(--Red)
      }
      &:active{
        color : red;
      }
    }
  }
 }
`

const StyledContainer = styled.div`
 width : 100%;
 height : auto;
 padding : 0px 10%;

 .Container{
  --auto-grid-min-size: 19rem;
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
 column-gap : 10px;
 row-gap: 25px;
 grid-auto-flow : row;
 justify-items  : center;
 margin-bottom : 30px;
 background: linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(238,238,238,0) 100%);
 border-bottom-left-radius : 10px;
 border-top-left-radius : 10px;
 padding : 10px;
 }
`

const StyledCard = styled.div`
 width : 300px;
 height : 400px;
 background-color : white;
 border-radius : 10px;
 display : flex;
 flex-direction : column;
 box-shadow: rgba(100, 100, 111, 0.1) 0px 2px 2px 0px;
 position : relative;
 .TopStyledCard{
  height : 75%;
  width : 100%;
  display : flex;
  justify-content : center;
  position : relative;
  &::after{
    position :absolute;
    width : 100%;
    height: 100%;
    content :'';
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
  }
 }
 .BottomStyledCard{
 width : 100%;
 height : 25%;
 display : flex;
 text-align : center;
 flex-direction : column;
 h1{
  margin :0;
 }
 }
 .NumberStyledCard{
  position : absolute;
  right :5%;
 }
`

export default index