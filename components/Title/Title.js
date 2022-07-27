import styled from 'styled-components'

function SectionTitle({text}) {
 
  return (
    <StyledSectionTitle className='TtleSectionAnimation'>
      <h1>{text}</h1>
    </StyledSectionTitle>
  )
}

const StyledSectionTitle = styled.div`
padding: 0px 9%;
   h1{
    font-family: 'Lemon/Milk light', sans-serif;
     width : 100%;
     display : flex;
     align-items : center;
     overflow : hidden;
     font-size : 2rem;
     padding : 20px;
     color :#2a2a2a;
     @media(max-width: 768px){
       font-size : 1.9rem;
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
   `

export default SectionTitle