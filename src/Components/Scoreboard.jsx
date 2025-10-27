import React, { useState } from 'react';

const Scoreboard = () => {
    const [score, setScore] =useState(0);


    const handleSixRuns = () => {
        setScore(score + 6)
    }

    const handleFourRuns = () => {
        setScore(score + 4)
    }

    const handleThreeRuns = () => {
        setScore(score + 3)
    }

    const handleTwoRuns = () => {
        setScore(score + 2)
    }

    const handleOneRuns = () => {
        setScore(score + 1)
    }


    return (
        <div className='rounded-xl border-b-7 border-amber-100 mx-10 my-20 py-10 bg-amber-200'>
            <h1 className='text-6xl font-extrabold text-center'>Score: {score} </h1>
            <div className='flex justify-center gap-10 m-30'>
                <button onClick={handleSixRuns} className='px-8 py-7 bg-green-500 rounded-xl font-bold text-6xl text-white'>6</button>
                <button onClick={handleFourRuns} className='px-8 py-7 bg-green-500 rounded-xl font-bold text-6xl text-white'>4</button>
                <button onClick={handleThreeRuns} className='px-8 py-7 bg-green-500 rounded-xl font-bold text-6xl text-white'>3</button>
                <button onClick={handleTwoRuns} className='px-8 py-7 bg-green-500 rounded-xl font-bold text-6xl text-white'>2</button>
                <button onClick={handleOneRuns} className='px-8 py-7 bg-green-500 rounded-xl font-bold text-6xl text-white'>1</button>
            </div>
        </div>
    );
};


export default Scoreboard;