import React from 'react';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const Home = () => {
    const [courses] = useCourses();
    const topCourses = courses.filter(course => course.id <= 4)
    return (
        <div>
            {
                topCourses.map(topCourse => <Course course={topCourse}></Course>)
            }
        </div>
    );
};

export default Home;