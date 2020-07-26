import React, { useState } from 'react';
import Candidates from "./Candidates"
import Filter from "./Filter"
import MyLists from "./MyLists"
import ResumeView from "./ResumeView"
import { useTransition, animated } from 'react-spring'
import '../../Static/RecruiterView.css';
import CandidatesList from "../../Static/Candidates.json"



import { Col, Row, Container } from "react-bootstrap"

function RecruiterView() {
    const [resumeView, setResumeView] = useState(true)
    const [candidate, setCandidate] = useState(CandidatesList.CandidatesList[0])
    function toggleResumeView(info) {
        setResumeView(!resumeView);
        setCandidate(info);
    }
    const transitions = useTransition(resumeView, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    return transitions.map(({ item, key, props }) =>
        item
            ? <animated.div style={props}>
                <Container fluid className="p-0 vw-100" style={{ backgroundColor: '#13294B' }}>
                    <Row className="mb-30">
                    </Row>
                    <Row className="vw-100">
                        <Col md="auto">
                            <Filter />
                        </Col>
                        <Col md="auto">
                            <Candidates toggleResumeView={(candidate) => toggleResumeView(candidate)} />
                        </Col>
                        <Col md="auto">
                            <MyLists toggleResumeView={(candidate) => toggleResumeView(candidate)} />
                        </Col>
                    </Row>
                </ Container >
            </animated.div>
            : <animated.div style={props}>
                <Container fluid className="p-0 vw-100" style={{ backgroundColor: '#13294B' }}>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ResumeView  candidate={ candidate} toggleResumeView={(candidate) => toggleResumeView(candidate)} />
                        </Col>
                    </Row>

                </Container>
            </animated.div>
    )




}
export default RecruiterView