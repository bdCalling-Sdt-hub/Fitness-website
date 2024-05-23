import React, { useState } from 'react';
import Slider from "react-slick";
import '../Style/Feedback.css'

const images = [
    "https://i.ibb.co/DzpSzTF/xman1.jpg",
    "https://i.ibb.co/8cFbXBf/xman2.jpg",
    "https://i.ibb.co/9VsmTY2/xman3.jpg",
    "https://i.ibb.co/DzpSzTF/xman1.jpg",
    "https://i.ibb.co/8cFbXBf/xman2.jpg",
    "https://i.ibb.co/9VsmTY2/xman3.jpg"
]
interface SliderSettings {
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    beforeChange: (current: number, next: number) => void;
    centerMode: boolean;
    autoplaySpeed: number;
}
const Feedback = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const settings: SliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        beforeChange: (current, next) => setSlideIndex(next),
        centerMode: true,
        autoplaySpeed: 2000
    };

    return (
        <div className='w-full mx-auto px-4'>
            <div className='pt-16'>
                <div className='mb-20'>
                    <h1 className='text-5xl font-semibold  text-center'>What Out Customers <br /> Have to Say</h1>
                </div>
                <div className="slider">
                    <Slider {...settings}>
                        {
                            images.map((img, index) => (
                                <div className={index === slideIndex ? 'slide slide-active' : 'slide'} key={index}>
                                    <div className='px-14 py-6 font-extralight text-[#555555] text-center flex flex-col justify-center items-center gap-3 '>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
                                        <div className='h-20 w-20 rounded-full overflow-hidden'>
                                            <img src='https://i.ibb.co/qszbKLH/Ellipse-213.png' className='h-full w-full object-cover' alt="" />
                                        </div>
                                        <h4 className='text-[#555555] font-semibold'>Wade Warren</h4>
                                        <p className='text-[#555555] font-thin'>Actor</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Feedback;