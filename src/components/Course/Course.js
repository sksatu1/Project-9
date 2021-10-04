import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import './Course.css'

const Course = (props) => {
    const { name, img, classes, courseDuration, price } = props.course;
    return (
        <Col>
            <Card style={{ height: "100%", background: "rgb(183 94 94 / 32%)" }}>
                <Card.Img variant="top" src={img} style={{ height: "200px" }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <div className="course-info">
                            <span>
                                <FontAwesomeIcon icon={faPlayCircle} />{classes} Lectures
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faClock} /> {courseDuration}
                            </span>
                            <span>
                                price : ${price}
                            </span>
                        </div>
                    </Card.Text>

                    <div>

                    </div>

                    <Button variant="primary">Details</Button>{' '}
                    <Button variant="secondary">Enroll</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;