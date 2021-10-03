import React from 'react';
import './Course.css'

const Course = (props) => {
    const { name, img, id, classes, courseDuration, price } = props.course;
    return (
        <div className='course-container'>
            <h1>Course title : {name}</h1>
            <h2>id : {id}</h2>
            {/* <img src={img} alt="" /> */}
            <p>classes : {classes}</p>
        </div>
    );
};

export default Course;