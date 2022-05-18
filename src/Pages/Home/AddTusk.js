import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
const AddTusk = () => {

    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();


    const email = user?.email;


    const onSubmit = (data, e) => {
        const url = `https://desolate-springs-49044.herokuapp.com/tusk`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                e.target.reset(result);
            })
    };


    return (
        <div className='bg-img-container'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-12">
                        <div className="border  border-2 rounded p-4 my-5 w-3/5 mx-auto">
                            <h2 className='text-center mb-4 text-3xl font-bold'>Please Add an Item</h2>
                            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                                <label className='mb-2'>Tusk Name</label>
                                <input className='input input-bordered w-full mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 30 })} />

                                <label className='mb-2'>Description</label>
                                <textarea className='input input-bordered w-full mb-2' placeholder='Description' {...register("description")} />

                                <label className='mb-2'>User Email</label>
                                <input className='input input-bordered w-full mb-2' value={email} readOnly {...register("email")} />

                                <input className='btn btn-primary mt-2 text-white' type="submit" value="Add Item" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};
export default AddTusk;