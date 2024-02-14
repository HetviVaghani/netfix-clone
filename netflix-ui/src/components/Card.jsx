import React from 'react'
import styled from 'styled-components';

function Card({movieData,isLiked = false}) {
  
  return (
    <Container>
      <img src={`https://image.tmdb.org/t/p/w500${movieData.imgage}`} alt="movies" />
    </Container>
  )
}
const Container = styled.div``;

export default Card;
