import styled from "styled-components"
import NewsCard from "./NewsCard"

function News() {
  return (
    <StyledNews>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
    </StyledNews>
  )
}

const StyledNews = styled.div`
padding : 0px 10%;
  height : auto;
  width  : 100%;
         --auto-grid-min-size: 22rem;
         display: grid;
         grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
         column-gap : 10px;
         row-gap: 10px;
         grid-auto-flow : row;
`

export default News