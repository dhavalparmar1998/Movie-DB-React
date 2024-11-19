import React, { useRef } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap'
import '../App.css'

export default function Menu() {

    const textdata = useRef();
    var navigate = useNavigate();

    function searchdata(ev){
        ev.preventDefault();
        console.log('test');
        var textdatavalue = textdata.current.value;
        console.log(textdatavalue);
        navigate("/search-data/" + textdatavalue )
    }


    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/"  id='movie'>Movie Db</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" id='search'/>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
               <Link className='nav-link' to="/">POPULAR</Link>
            <Link className='nav-link' to="/upcoming">UPCOMING</Link>
            <Link className='nav-link' to="/top-rated">TOP-RATED</Link>
           
            </Nav>
            <form onSubmit={searchdata}>
                <input type='text' ref={textdata}/>
                <button>Search</button>
              </form> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
