import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const Home = () => {
    const [courses] = useCourses();
    const topCourses = courses.filter(course => course.id <= 4)
    return (
        <div className="container">

            <Row xs={1} md={2} className="g-4">
                {
                    topCourses.map(topCourse => <Course course={topCourse}></Course>)
                }
            </Row>

        </div>
    );
};

export default Home;