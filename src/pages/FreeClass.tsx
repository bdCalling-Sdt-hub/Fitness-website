import React, { useEffect, useRef, useState } from 'react'
import MetaTag from '../components/common/MetaTag'
import Heading from '../components/common/Heading'
import Video from "../assets/video.mp4"
import { FaPlay } from 'react-icons/fa'
import { RiCheckboxCircleFill } from 'react-icons/ri'
const FreeClass = (): React.JSX.Element => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };
    useEffect(() => {
        const videoElement = videoRef.current;

        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);

        if (videoElement) {
            videoElement.addEventListener('play', onPlay);
            videoElement.addEventListener('pause', onPause);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('play', onPlay);
                videoElement.removeEventListener('pause', onPause);
            }
        };
    }, []);
    return (
        <div className='container mx-auto py-6'>
            <Heading title='Free Class' style='mb-6' />
            <MetaTag title='Free Class' />
            <div className='container mx-auto overflow-hidden w-full py-6 max-h-[658px] min-h-96 sm:min-h-[470px] lg:min-h-[530px] xl:min-h-[658px] rounded-lg relative bg-red-400'>
                <video ref={videoRef} controls style={{
                }} className='rounded-lg w-full object-cover'>
                    <source src={Video} type="video/mp4" />
                </video>
                {
                    !isPlaying && <button onClick={handlePlay} className='bg-[#3F2700] bg-opacity-45  p-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer rounded-full'>
                        <FaPlay className=' text-white text-3xl' />
                    </button>
                }
            </div>
            <div className='md:grid md:grid-cols-2 flex flex-col xl:grid-cols-3 gap-6 justify-start items-start md:items-center my-14 mb-8'>
                {
                    [...Array(3)].map((item, index) => {
                        return (
                            <div key={index} className='py-10 border w-full'>
                                <div className='w-[296px] mx-auto'>
                                    <h1 className='font-light text-2xl leading-8 text-center text-secondary'>Standard Membership</h1>
                                    <p className='text-[#B47000] text-left my-8 text-[36px] leading-[49px] '>48 CND <sub className='text-[#B47000] text-[18px] leading-6 font-semibold'>6 month</sub></p>
                                    <div className='grid grid-cols-1 gap-6 '>
                                        {
                                            [...Array(7)].map((_item, index) => {
                                                return (
                                                    <div key={index} className='flex items-center text-secondary text-[16px] leading-5 font-normal gap-[14px] '>
                                                        <RiCheckboxCircleFill size={24} color='#555555' />
                                                        3 New Classes Every Week
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <button className='w-full block mx-auto  py-3 rounded-md mt-6 bg-[#3C3C3C] text-[#FBFBFB]'>Buy Now</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <p className='text-sm md:text-[16px] lg:text-[19px] text-[#555555] leading-9 pb-11'><strong>Note:</strong>  stablished fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy</p>
        </div>
    )
}

export default FreeClass
