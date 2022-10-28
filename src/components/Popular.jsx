import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';
import style from "../css/popular-style.css";
import { PopularContext } from '../context/PopularContext';

export default function Popular() {

    const [popular, setPopular] = useState([])

    const getPopular = () => {
        const check = localStorage.getItem('popular')
        if (check) {
            setPopular(JSON.parse(check))
        } else {
            axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=7`)
                .then(res => {
                    const data = res.data;
                    localStorage.setItem('popular', JSON.stringify(data.recipes))
                    setPopular(data.recipes)
                })
        }
    }

    useEffect(() => {
        getPopular();
    }, [])

    return (
        <div className='popular'>
                <h2>Popular Receipes</h2>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: "free"
                }}>
                    {popular.map(recipe => (
                        <SplideSlide key={recipe.id}>
                            <Link to={"recipe/"+recipe.id}>
                                <Card title={recipe.title}
                                    img={recipe.image}
                                    />
                            </Link>
                        </SplideSlide>
                    ))}
                </Splide>
        </div>
    )
}
