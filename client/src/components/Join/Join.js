import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="outer-wraper">
            <div className="inner-wraper">
                <h1>Join</h1>
                <div>
                    <input placeholder="Name" type="text" className="joinInput" onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <input placeholder="Room" type="text" className="joinInput" onChange={(event) => setRoom(event.target.value)} />
                </div>
                <Link onClick={(event) => (!name || !room ? event.preventDefault() : null)} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button" type="submit">
                        Join
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Join;
