import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./Components/SearchBar"
import MyLists from "./Components/MyLists"
import Candidates  from "./Components/Candidates"
import './App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col"
import SearchContextProvider from './Contexts/SearchContext';

function App() {
 


  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      
      />
      <Container fluid>
        <Row>
          <SearchContextProvider>
            <Col> <SearchBar /></Col>
            <Col xs={6}> <Candidates /></Col>
            <Col> <MyLists /></Col>
          </SearchContextProvider>
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
