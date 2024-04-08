import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Alert() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();


    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/location", {
                latitude: latitude,
                longitude: longitude,
                email: email,

            });
            alert("Alert activated for the location");
            navigate('/');
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className='flex w-full screen bg-gray-100'>
            <div className='w-full flex items-center justify-center '>
                <div className='bg-white px-20 py-20 rounded-3xl border-2 border-gray-200'>
                    <h1 className='text-5xl font-semibold'>Want Alerts? </h1>
                    <p className='font-medium text-lg text-gray-500 mt-4'>Please enter your Location!</p>
                    <div className='mt-8'>
                        <div>
                            <label className='text-lg font-medium'>Latitude</label>
                            <input
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                type='number'

                                value={latitude}
                                onChange={(event) => {
                                    setLatitude(event.target.value);
                                }}
                            />
                        </div>

                        <div>
                            <label className='text-lg font-medium'>Longitude</label>
                            <input
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                type='number'

                                value={longitude}
                                onChange={(event) => {
                                    setLongitude(event.target.value);
                                }}
                            />
                        </div>

                        <div>
                            <label className='text-lg font-medium'>Email</label>
                            <input
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                type='email'

                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </div>

                    </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <button
                            type="submit" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] easy-in-out py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'
                            onClick={save}
                        >
                            Get Alerts !
                        </button>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Alert;
