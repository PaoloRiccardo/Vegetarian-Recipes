import { useEffect, useState} from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import {Link} from "react-router-dom"

function Veggie() {
  const [veggie, setVeggie] = useState ([]);
  useEffect(() => {
    getVeggie();
}, []);

const getVeggie = async () => {
    const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
    const data = await api.json();
    setVeggie(data.recipes);
    console.log(data.recipes);

};

  return (
    <Wrapper>
    <h3>Our Veggie Picks</h3>
    <Splide
      options={{
        perPage: 3,
        arrows: false,
        pagination: false,
        drag: "free",
        gap: "5rem",
        breakpoints: {
          767: {
            perPage: 2,
          },
          640: {
            perPage: 1,
          },
        },
      }}
    >
      {veggie.map(({ title, id, image }) => (
        <SplideSlide key={id}>
          <Card>
            <Link to={`/recipe/${id}`}>
              <p>{title}</p>
              <img src={image} alt={title} />
              <Gradient />
            </Link>
          </Card>
        </SplideSlide>
      ))}
    </Splide>
  </Wrapper>
);
};

const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
overflow: hidden;
position: relative;


img{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
}

p{
    position: absolute;
    z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
}

`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
border-radius: 2rem;
`

export default Veggie