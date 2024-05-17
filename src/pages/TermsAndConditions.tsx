import React from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading'

const TermsAndConditions = ():React.JSX.Element => {
    return (
        <div className='container pb-20'>
            <Navigation name='Terms And Conditions' />
            <Heading title='Terms And Conditions' style='mb-6' />

            <div>
                <p className='text-secondary text-[16px] leading-[30px] font-normal'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                    a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                    of Lorem Ipsum.
                </p>

                <br />
                <p className='text-secondary text-[24px] leading-[32px] font-normal'>What personal information do we collect from the people that visit our website or blog?</p>
                <p className='text-secondary text-[16px] leading-[30px] font-normal'>
                    When ordering or registering on our site, as appropriate, you may be 
                    asked to enter your name, email address, mailing address, 
                    phone number or other details to help you with your experience.
                </p>

                <br />
                <p className='text-secondary text-[24px] leading-[32px] font-normal'>When do we collect information?</p>
                <p className='text-secondary text-[16px] leading-[30px] font-normal'>
                    When ordering or registering on our site, as appropriate, you may be 
                    asked to enter your name, email address, mailing address, 
                    phone number or other details to help you with your experience.
                </p>

                <br />
                <p className='text-secondary text-[24px] leading-[32px] font-normal'>When do we collect information?</p>
                <p className='text-secondary text-[16px] leading-[30px] font-normal'>
                    When ordering or registering on our site, as appropriate, you may be 
                    asked to enter your name, email address, mailing address, 
                    phone number or other details to help you with your experience.
                </p>

                <br />
                <p className='text-secondary text-[24px] leading-[32px] font-normal'>When do we collect information?</p>
                <p className='text-secondary text-[16px] leading-[30px] font-normal'>
                    When ordering or registering on our site, as appropriate, you may be 
                    asked to enter your name, email address, mailing address, 
                    phone number or other details to help you with your experience.
                </p>

            </div>

        </div>
    )
}

export default TermsAndConditions