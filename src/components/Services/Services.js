import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import "./Services.css"

const Services = () => {
    const [courses] = useCourses();
    return (
        <div className="service-container">
            {
                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(topCourse => <Course
                            key={topCourse.id}
                            course={topCourse}></Course>)
                    }
                </Row>
            }
        </div>
    );
};

export default Services;