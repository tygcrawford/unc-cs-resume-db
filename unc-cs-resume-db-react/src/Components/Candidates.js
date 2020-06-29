import React from "react"
import CardData from "..//data.json"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import CandidateCard from "./CandidateCard"
import Col from "react-bootstrap/Col"
import SearchContext from "../Contexts/SearchContext"
import { Card } from "react-bootstrap"


function Candidates() {
    let filteredData = CardData.filter((CardData) => { return CardData.gradYear < 2022 });
    console.log(filteredData)

    return (
        <SearchContext.Consumer>{(context) => {
            const { Twenty20, Twenty21, Twenty22, Twenty23 } = context;
            let filteredData = CardData.filter((CardData) => {if(!Twenty20){
                return CardData.gradYear !== 2020
                
            } })
            
            // .filter((CardData) => {if(!Twenty21){
            //     return CardData.gradYear !== 2021
                
            // } }).filter((CardData) => {if(!Twenty22){
            //     return CardData.gradYear !== 2022
                
            // } }).filter((CardData) => {if(!Twenty23){
            //     return CardData.gradYear !== 2023
                
            // } })


            return (
                <div>
                    <h1 className="display-1"> Candidates</h1>
                    <Container>
                        <Row>
                            {filteredData.map(filteredData => (
                                <Col xs={3} key={filteredData.id} >
                                    <   CandidateCard data={filteredData} />
                                </Col>
                            )
                            )};
            </Row>

                    </Container>
                </div>
            )
        }}



        </SearchContext.Consumer>



    );
}
export default Candidates



