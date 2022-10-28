import React, { useEffect, useState } from 'react';
import { BsSearch } from "react-icons/bs";
import style from "../css/search-style.css";
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        navigate('/searched/'+input);
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <BsSearch />
            <input className='search__form'
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Search"
            />
        </form>
    )
}
