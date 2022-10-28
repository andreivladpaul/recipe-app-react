import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import style from "../css/recipe-style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Recipe() {
    const [details, setDetails] = useState({});
    let params= useParams();

    const fetchDetails = () => {
        axios.get(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
                .then(res => {
                    const data = res.data;
                    setDetails(data);
                })
    }

    useEffect(() => {
        fetchDetails();
    }, [params.id])
  return (
    
    <div>
      <Container fluid>
        <Row>
          <h3>{details.title}</h3>
          <Col>
            <img src={details.image} alt={details.title} />
          </Col>
          <Col>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}
