import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    //console.log(handleLogin);
    


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {//form submit hudaa yo function call hunxa.
        e.preventDefault()
        // console.log("Form Submitted.");
        // console.log('email is', email);
        // console.log('password is',password);

        handleLogin(email,password);//whenever we submit form, we pass the email and password inside handle login function.
        setEmail("")//submit garepaxi input field empty banako.
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col items-center justify-center'>
                {/* Input ko value email lekhim, tara email ko value mathi usestate maa empty xa. so email empty huni vayo, tespaxi onchange maa j change hunxa tei lai email set gareko. */}
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-500' type="email" placeholder='Enter your email' required/>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-500' type="password" placeholder='Enter your Password' required/>
                <button className='mt-5 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Login</button>
            </form>
        </div>
    </div>
  )
}
export default Login