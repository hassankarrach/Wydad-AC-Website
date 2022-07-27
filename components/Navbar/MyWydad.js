import styled from "styled-components"
import PersonIcon from '@mui/icons-material/Person';

function MyWydad() {
  return (
    <StyledMyWydad>
        <PersonIcon className="MyWydadIcon"/>
        MyWydad
    </StyledMyWydad>
  )
}

const StyledMyWydad = styled.button`
 padding : 10px 18px;
 background-color : var(--Red);
 border : none;
 color : white;
 cursor : pointer;
 height :100%;
 border-radius : 3px;
 display : flex;
 align-items :center;
 margin-right : 10px;
 transition : 0.2s ease-in-out;
 font-family : var(--font-secondary);
 

 &:hover{
    color : var(--Red);
    background-color : transparent;
    border: 1px solid var(--Red);
 }
 .MyWydadIcon{
    margin-right : 5px;
 }
`

export default MyWydad