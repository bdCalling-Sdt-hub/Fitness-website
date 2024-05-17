import React from 'react';
import noPhoto from "../assets/notfound.png"
import { Link } from 'react-router-dom';

const NotFound = ():React.JSX.Element => {
    return (
        <div
            style={{
                backgroundImage: `url(${noPhoto})`,
                backgroundPosition: "center",
                backgroundSize: 'conver',
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
            }}
            className='flex items-center justify-center'
        >
            <div>
                <h1 className='text-primary text-[64px] leading-[115px] font-semibold'>404 Not Found</h1>
                <p className='text-[#2F2F2F] text-[16px] leading-6 mb-6 font-normal'>Your visited page not found. You may go home page.</p>
                
                <Link to={"/"} className='flex items-center justify-center'>
                    <button 
                            style={{
                                width: 200,
                                border: "none",
                                outline: "none",
                                borderRadius: 4,
                                height: 48,
                                margin: "0 auto"
                            }}
                            className='
                                bg-primary
                                text-[#F2F2F2] font-normal text-[16px] leading-5
                            '
                        >
                            Go Back Home
                        </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound