import React, { useEffect, useState } from 'react';
import style from '../css/popular-style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Desert() {
  const [dessert, setDessert] = useState([]);

  const getDessert = () => {
    const check = localStorage.getItem('desert');
    if (check) {
      setDessert(JSON.parse(check));
    } else {
      axios
        .get(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15&tags=vegetarian,dessert&number=7`
        )
        .then((res) => {
          const data = res.data;
          localStorage.setItem('dessert', JSON.stringify(data.recipes));
          setDessert(data.recipes);
        });
    }
  };

  useEffect(() => {
    getDessert();
  }, []);
  return (
    <div className="popular">
      <h2>Desserts</h2>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
        }}
      >
        {dessert.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Link to={"/recipe/"+recipe.id}>
              <div className="recipe">
                <div className="gradient"></div>
                  <h4 className="recipe__title">{recipe.title}</h4>
                  <img src={recipe.image} alt="" />
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
