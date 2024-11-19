import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Showresult({moviedata, heading}) {
  return (
    
    <Container>
        <h1 className='text-center mb-5' style={{color:'yellow',}}>{heading}</h1>
        <Row>
            {
                moviedata && moviedata.length>0 && moviedata.map(({original_title, poster_path, vote_average, id})=>
                <Col md={3}>
                <Image src={"https://image.tmdb.org/t/p/w500"+poster_path} fluid></Image>
                <h4 className='text-center'>{original_title}</h4>
                <p className='text-center'>Rating : {vote_average}</p>
                <Button variant='dark' style={{margin:'auto'}} className='ms-auto d-flex mb-3' >
                    <Link  style={{ textDecoration:'none', color:'yellow'}} to={"/single-movie/"+id}>View</Link>
                </Button>

            </Col>
            )}

        </Row>
    </Container>
  )
}
