import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
    return (
        <div>
            <p className=' m-10 text-2xl text-center tracking-wide text-gray-700 font-medium '>CONTACT <span className=' text-gray-900 font-medium'>US</span></p>
            <div className=' flex flex-col md:flex-row gap-10 justify-center flex-wrap'>
                <div>
                    <img className=' md:max-w-96' src={assets.contact_image} />
                </div>
                <div className=' flex flex-col gap-5 pt-6 min-w-60  items-center'>
                    <b className=' '>Our Office</b>
                    <p className=' text-gray-600'> Health Horizon<br />
                        dallu 000, kathmandu, Nepal</p>
                    <p className=' text-gray-700'>
                        Tel: (977+) 01-4830281<br />
                        Email: healthhorizon@gmail.com
                    </p>
                    <b className=' text-[17px] text-gray-600'>CAREERS AT  HEALTH HORIZON</b>
                    <p className=' text-sm '>Learn more about our teams and job openings</p>
                    <button className=' text-sm hover:bg-primary transition-all duration-500 hover:text-white md:max-w-40 border border-gray-500 px-4 py-4'>Explore Now</button>
                </div>
            </div>
            <div className="map-container mt-6">
                <h1 className=' text-4xl text-center mb-3 font-medium text-gray-800'>Map</h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28258.283350456113!2d85.32085958519593!3d27.708472524579133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19075849239d%3A0x4ddaddd1271c3890!2sBagbazar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1736412459858!5m2!1sen!2snp"
                    width="100%"  // This makes the iframe responsive
                    height="450"
                    className="rounded-lg shadow-lg"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

        </div>
    )
}

export default Contact