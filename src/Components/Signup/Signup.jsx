import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/v1/user/save", {
                name: name,
                email: email,
                password: password,
            });
            alert("User Registation Successfully");
            navigate('/login');
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className='flex w-full h-screen bg-gray-100'>
            <div className='w-full flex items-center justify-center lg:w-1/2'>
                <div className='bg-white px-20 py-20 rounded-3xl border-2 border-gray-200'>
                    <h1 className='text-5xl font-semibold'>Welcome! </h1>
                    <p className='font-medium text-lg text-gray-500 mt-4'>Please enter your details!</p>
                    <div className='mt-8'>
                        <div>
                            <label className='text-lg font-medium'>Name</label>
                            <input
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                type='text'
                                placeholder='Enter your name'
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                            />
                        </div>

                        <div>
                            <label className='text-lg font-medium'>Email</label>
                            <input
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                type='email'
                                placeholder='Enter your email'
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label className='text-lg font-medium'>Password</label>
                            <input
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                type='password'
                                placeholder='Enter your password'
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </div>
                    </div>

                    <div className='mt-8 flex justify-center items-center'>
                            <p className='font-medium text-base'>Already have an account?</p>
                            <Link to='/login'>
                                <button className='text-violet-500 text-base font-medium ml-2'>Login </button>
                            </Link>
                        </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <button
                            type="submit" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] easy-in-out py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'
                            onClick={save}
                        >
                            Sign up
                        </button>
                     
                    </div>
                </div>
            </div>
            <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200'>
                <div className='w-60 h-60 bg-gradient-to-tr from-lime-500 to bg-blue-500 rounded-full animate-spin' />
                <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg' />
            </div>
        </div>
    );
};

export default Signup;
