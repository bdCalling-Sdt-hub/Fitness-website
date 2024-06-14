import React, { useEffect, useState } from 'react';
import Slider, { CustomArrowProps, Settings } from "react-slick";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from '../Store/hook';
import { GetAllFeedback } from '../States/FeedBack/GetAllFeedbackSlice';
import { ServerUrl } from '../AxiosConfig/Config';
import { Empty } from 'antd';


const ArrowLeft = ({ ...props }: CustomArrowProps) => (
    <button
        {...props}
        className="prev"
    >
        <BiChevronLeft size={24} color='#B47000' />
    </button>
);

const ArrowRight = ({ ...props }: CustomArrowProps) => (
    <button
        {...props}
        className="next"
    >
        <BiChevronRight size={24} color='#B47000' />
    </button>
);


const Feedback = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const settings: Settings = {
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        dots: false,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        beforeChange: (current, next) => setSlideIndex(next),
        centerMode: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1110,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const dispatch = useAppDispatch()
    
    const { Feedback } = useAppSelector(state => state.GetAllFeedback)
    useEffect(() => {
        dispatch(GetAllFeedback())
    }, [])
    return (
        <div className='w-full mx-auto'>
            <div className='mb-[50px]'>
                <h1 className='font-semibold leading-[65px] text-secondary text-2xl md:text-3xl lg:text-4xl xl:text-5xl  text-center'>What Clients Say</h1>
            </div>
            <div className="slider">
                <Slider {...settings}>
                    {
                        (Feedback && Feedback.length) <= 0 && [...Array(3).keys()].map((item) => <Empty key={item} />)
                    }
                    {
                        Feedback.slice(0, 10).map((item, index) => (
                            <div
                                className={`${index === slideIndex ? 'slide slide-active' : 'slide'} relative`}
                                key={item?._id}
                                style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}
                            >
                                <div className='px-14 py-6 font-extralight text-[#555555] text-center flex flex-col justify-center items-center gap-3 '>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
                                    <div className='h-20 w-20 rounded-full overflow-hidden'>
                                        <img src={item?.user?.profile_image.includes('http') ? 'https://i.ibb.co/d4RSbKx/Ellipse-980.png' : `${ServerUrl}/${item?.user?.profile_image}`} className='h-full w-full object-cover' alt="" />
                                    </div>
                                    <h4 className='text-[#555555] font-semibold'>{item?.user?.name}</h4>
                                    <p className='text-[#555555] font-thin'>{item?.user?.role}</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Feedback;