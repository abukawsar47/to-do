import React, { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
// import auth from '../../firebase.init';

const Tusk = ({ tusk }) => {

    // const [user] = useAuthState(auth);
    const [tusks, setTusks] = useState([]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://desolate-springs-49044.herokuapp.com/tusk/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = tusks.filter(tusk => tusk._id !== id);
                    setTusks(remaining);
                })
        }
    }

    const handleTextDecor = id => {
        fetch(`https://desolate-springs-49044.herokuapp.com/tusk/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary font-bold">{tusk.name}</h2>
                <p>{tusk.description}</p>
                <div className='mt-2'>
                    <button onClick={() => handleTextDecor(tusk._id)} className="btn btn-primary  text-white mr-2"
                    >Complete</button>
                    <button onClick={() => handleDelete(tusk._id)} className="btn btn-primary  text-white "
                    >Delete</button>
                </div>
            </div>

        </div>
    );
};

export default Tusk;