import React from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading';
import photo from "../assets/photo.png"

const AboutUs = ():React.JSX.Element => {
    return (
        <div className='container pb-20'>
            <Navigation name='About Us' />
            <Heading title='About Us' style='mb-6' />

            <div>
                <p className='text-secondary text-[16px] leading-[30px] font-normal'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                    a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                    of Lorem Ipsum.
                </p>

                <img src={photo} alt="" className='my-6' />

                <p className='text-secondary text-[16px] leading-[30px] font-normal'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                    a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                    of Lorem Ipsum.
                </p>

                <br />

                <p className='text-secondary text-[16px] leading-[30px] font-normal'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                    a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                    of Lorem Ipsum.
                </p>

                <br />
            </div>

        </div>
    )
}

export default AboutUs