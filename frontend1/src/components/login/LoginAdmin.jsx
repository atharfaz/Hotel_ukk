import React from "react";
import axios from "axios";
import { useState } from 'React'

const LoginAdmin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('');

    const handleFormLoginAdmin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/hotel/user/admin', {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            localStorage.setItem('token', response.data.token)
        } catch (error) {
            setMessage('Login failed. Please try again.');
        }

        return (
            <div>
                <h1>Login Admin</h1>
            </div>
            // <div>
            //     <form className="w-full max-w-sm">
            //         <div className="md:flex md:items-center mb-6">
            //             <div className="md:w-1/3">
            //                 <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            //                     Full Name
            //                 </label>
            //             </div>
            //             <div className="md:w-2/3">
            //                 <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"></input>
            //             </div>
            //         </div>
            //         <div className="md:flex md:items-center mb-6">
            //             <div className="md:w-1/3">
            //                 <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
            //                     Password
            //                 </label>
            //             </div>
            //             <div className="md:w-2/3">
            //                 <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************"></input>
            //             </div>
            //         </div>
            //         <div className="md:flex md:items-center mb-6">
            //             <div className="md:w-1/3"></div>
            //             <label className="md:w-2/3 block text-gray-500 font-bold">
            //                 <input className="mr-2 leading-tight" type="checkbox"></input>
            //                 <span className="text-sm">
            //                     Send me your newsletter!
            //                 </span>
            //             </label>
            //         </div>
            //         <div className="md:flex md:items-center">
            //             <div className="md:w-1/3"></div>
            //             <div className="md:w-2/3">
            //                 <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            //                     Sign Up
            //                 </button>
            //             </div>
            //         </div>
            //     </form>
            //     <div className="inline-block relative w-64">
            //         <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            //             <option>Really long option that will likely overlap the chevron</option>
            //             <option>Option 2</option>
            //             <option>Option 3</option>
            //         </select>
            //         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            //             <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            //         </div>
            //     </div>
            // </div>
        )
    };
}
export default LoginAdmin