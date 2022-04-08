import React from 'react';
import 'tachyons';

export const Robot = ({robot}) => {
    return (
        // <h1>RoboFriends</h1>
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robot" src={`https://robohash.org/${robot.id}?size=150x150`} />
            {/* <img alt="robot" src="https://robohash.org/random1?size=150x150" /> */}
            <div>
                <h2>{robot.name}</h2>
                <p>{robot.email}</p>
            </div>
        </div>
    )
}