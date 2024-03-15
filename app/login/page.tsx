import React from 'react'
import logo from '../assets/images/icons/logo-orginal 2.png'
const Login = () => {
  return (
    <div className='bg-[#F5F5F5] w-[100vw] h-[100vh] flex justify-center items-center'>


      <div className='bg-[#FFFFFF] h-80 w-72 box_login rounded-md'>
      <div className='flex items-center justify-center w-full p-2'>
        <img src={logo} className='w-10 h-14' alt="" />
        <p className='text-xl font-semibold text-[#8754AF] mr-3'>
        آران آسایش
        </p>
      </div>
      <div
        className="flex-1 border-[#ECECEC] border-t-2"
      ></div>
            </div>
    </div>
  )
}

export default Login;