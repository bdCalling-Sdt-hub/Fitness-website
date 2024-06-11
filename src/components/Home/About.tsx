
import Banner from "../../assets/about_banner.png";
import Heading from '../common/Heading';
import { Link } from 'react-router-dom';

const About = ({setShowModal}:any): React.JSX.Element => {

    return (
        <div className='container flex flex-col md:grid grid-cols-2 gap-10'>
            <div>
                <img src={Banner} alt="" />
            </div>

            <div className=' h-fit my-auto'>
                    <button
                    onClick={()=>setShowModal(true)}
                        style={{
                            width: 133,
                            border: "none",
                            outline: "none",
                            borderRadius: 4,
                            height: 48
                        }}
                        className='
                    bg-primary
                    text-[#F2F2F2] font-normal text-[16px] leading-5
                    '
                    >
                        About Us
                    </button>
                <Heading title='Why You Choose Us ' style='my-6' />
                <p className='text-secondary text-justify font-normal mb-6 text-[16px] leading-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.</p>

                <div className='flex flex-col  md:items-center items-start justify-start md:grid md:grid-cols-11 gap-[31px]'>
                    <div className='w-full text-center col-span-3'>
                        <p className='text-primary font-normal text-[40px] leading-10'>1000+</p>
                        <p className='text-primary font-normal text-[16px] leading-4 mt-2'>Complete Class</p>
                    </div>

                    <div className='md:h-[30px] h-[1px] md:w-[1px] w-full bg-[#DADADA] col-span-1' />

                    <div className='w-full text-center col-span-3'>
                        <p className='text-primary font-normal text-[40px] leading-10'>24 hour</p>
                        <p className='text-primary font-normal text-[16px] leading-4 mt-2'>Unlimited Access</p>
                    </div>

                    <div className='md:h-[30px] h-[1px] md:w-[1px] w-full bg-[#DADADA] col-span-1' />

                    <div className='w-full text-center col-span-3'>
                        <p className='text-primary font-normal text-[40px] leading-10'>500+</p>
                        <p className='text-primary font-normal text-[16px] leading-4 mt-2'>Students</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About