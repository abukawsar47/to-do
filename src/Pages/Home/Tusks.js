import React, { useEffect, useState } from 'react';
import Tusk from './Tusk';

const Tusks = () => {
    const [tusks, setTusks] = useState([]);

    useEffect(() => {
        fetch('https://desolate-springs-49044.herokuapp.com/tusk')
            .then(res => res.json())
            .then(data => setTusks(data));
    }, [])
    return (
        <div >
            <div className='text-center my-5 lg:my-16'>
                <h3 className='text-primary text-xl font-bold uppercase mb-2'>To Do</h3>
                <h2 className='text-3xl font-bold'>Start Your Next Tusk</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tusks.map(tusk => <Tusk
                        key={tusk._id}
                        tusk={tusk}
                    ></Tusk>)
                }
            </div>
        </div>
    );
};

export default Tusks;