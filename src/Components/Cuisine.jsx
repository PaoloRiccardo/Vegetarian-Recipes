import {FaPizzaSlice} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";



function Cuisine() {
  return (
    <List>
    <StyleLink to={"/category/Italian"}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
    </StyleLink>
  <StyleLink to={"/category/Japanese"}>
  <GiNoodles/>
  <h4>Japanese</h4>
</StyleLink>
 <StyleLink to={"/category/Chinese"}>
 <GiChopsticks/>
 <h4>Chinese</h4>
 </StyleLink>
</List>
  )
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0;
`;

const StyleLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);

h4 {
    color: white;
    font-size: 0.8rem;
}
svg {
    color: white;
    font-size: 1.5rem;
}
&.active{
    background: linear-gradient(to right, #f27212, #e94057);

    svg{
        color: white;
    }

    h4{
        color: white;
    }
}
`


export default Cuisine