import React, {useState} from 'react';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // const handleLogin = () => {
    //     if (username === 'example' && password === 'password') {
    //     setError('');
    //     alert('Login successful!');
    //     } else {
    //     // Failed login
    //     setError('Invalid username or password');
    //     }
    // };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white rounded-lg  flex items-center justify-center  flex-col w-[627px] h-[484px] ">
       

        <h2 className="text-black mb-14 text-Inter text-3xl font-medium">
          Log In
        </h2>
        <form>
          <div className="mb-8">
            <label className="block text-[#333333] text-Inter">
              Email
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-[416px] border  text-black rounded-md border-[#8A8A8A]"
              placeholder="admin@gmail.com"
            />
          </div>
          <div className="mb-8">
            <label className="block text-[#333333] text-Inter ">
              Password
            </label>
            <input
              type="password"
              className="mt-1 p-2 w-[416px] text-black border rounded-md border-[#8A8A8A]"
              placeholder="********"
            />
          </div>
          <button 
           
            className="w-[416px] bg-[#49656D] text-white py-2 rounded-md hover:bg-[#49656D]"
          >
            <a href='/Dash'>Log In</a>
          </button>
        </form>
      </div>
    </div>
    );
};

export default Login;