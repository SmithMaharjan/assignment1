import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import navbar from '../datas/navbar'

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className=' md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
                {/* left side */}
                <div className=' '>
                    <div className=' flex items-center gap-2'>
                        <img className=' w-10 cursor-pointer' src={assets.logoo} alt="logo" onClick={() => { navigate("/") }} />
                        <p className=' text-[18px] font-medium'>Health Horizon</p>
                    </div>
                    <p className=' w-full text-gray-600 md:w-2/3 leading-6'>
                        At Health Horizon, we are dedicated to empowering individuals to take charge of their well-being. Our mission is to provide innovative solutions and personalized resources to help you achieve a healthier, happier life.</p>


                </div>
                {/* center  */}
                <div className=''>
                    <h1 className=' text-xl text-gray-600 font-medium mb-5'>COMPANY</h1>
                    <ul className=' flex flex-col gap-2 text-gray-600'>
                        {navbar.map((navbar, index) => (
                            <>
                                <NavLink to={navbar.href}>

                                    <li onClick={() => { scrollTo(0, 0); navigate(navbar.href) }} key={index}  >{navbar.name}</li>
                                </NavLink>

                            </>
                        ))}
                    </ul>

                </div>
                {/* right side */}


                <div className=' '>
                    <h1 className=' text-xl text-gray-600 font-medium mb-5'>GET IN TOUCH</h1>
                    <ul className=' flex flex-col gap-2 text-gray-600'>
                        <li>+977-019289493</li>
                        <li>HealthHorizon@gmail.com</li>

                    </ul>

                </div>
            </div>
            <hr />
            <p className=' text-sm text-center py-5 text-gray-700'> Copyright 2025@ HealthHorizon- All Right Reserved </p>
        </div>
    )
}

export default Footer