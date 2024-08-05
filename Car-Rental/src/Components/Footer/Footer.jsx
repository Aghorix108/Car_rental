import React from 'react'
import { Link } from 'react-router-dom'

export function Footer(props) {


    return (
        <>
            <div className='flex flex-col lg:h-60 lg:w-full bg-white lg:flex-row'>
                <div className='w-1/2 bg-gray-200 flex p-4'>
                    <ul className='h-auto flex lg:flex-col lg:gap-2 font-bold text-xl'>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Cars">
                                Cars
                            </Link>
                        </li>
                        <li>
                            <Link to="/Contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/Partner">
                                Partner
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className='w-1/2 bg-green-500 flex flex-row p-4'>
                    <div>
                        <h1 className=''>Address</h1>
                        <p>A -18 Second Floor, Rtech Capital, High Street, Jaipur, Shri Kishanpura, Rajasthan 302033</p>
                    </div>
                    <iframe className='rounded' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14245.111941084584!2d75.857429!3d26.7992759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9ba36614e17%3A0xe2deeb9f61846583!2sCrazy%20Cars%20Self%20Drive!5e0!3m2!1sen!2sin!4v1722659817503!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}
