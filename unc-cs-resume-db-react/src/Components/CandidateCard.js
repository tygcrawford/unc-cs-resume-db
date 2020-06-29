import React, { useReducer } from "react";
import { Card } from "react-bootstrap";
import profilepic from "../Static/profilePic.png"

function CandidateCard({data, gradYear}){

    return(


        <Card className="h-300 shadows-sm bg-white rounded">
            <Card.Img variant="top" src={profilepic} /> 
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="d-flex mb-2 font-weight-bold">{data.name}</Card.Title>
                </div>

                    <Card.Text className="text-secondary">
                        Grad Year:{data.gradYear + '\n'} 

                        Skills:{data.skills.reduce((prev, curr)=> prev + "   "+curr)}
                    </Card.Text>
                    
                

            </Card.Body>
        </Card>
    )
}

export default CandidateCard