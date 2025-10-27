import React from 'react';

const Student = ({student}) => {
    const {name, hometown, live_in, salary} = student;

    return (
        <div className='border-2 m-10 p-10'>
            <h1>Name : {name} </h1>
            <p>Live In : {live_in} </p>
            <p>Home Town : {hometown} </p>
            <p>Salary : {salary} </p>
        </div>
    );
};

export default Student;