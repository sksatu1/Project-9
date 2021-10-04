import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import "./Home.css"

const Home = () => {
    const [courses] = useCourses();
    const topCourses = courses.filter(course => course.id <= 4)
    return (
        <div>
            <div className="course-heading">
                <div className="heading-details">
                    <div className="heading-img"><img src="https://www.mycplus.com/mycplus/wp-content/uploads/2009/02/programming-languages.jpg" alt="" /></div>
                    <h1>Welcome To Our Courses
                        <br />
                        <br />
                        <small style={{ color: "blueviolet" }}> Click to services to find more courses</small>
                    </h1>
                </div>
            </div>

            <div className="home-course-container">
                <Row xs={1} md={4} className="g-4">
                    {
                        topCourses.map(topCourse => <Course
                            key={topCourse.id}
                            course={topCourse}></Course>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Home;