import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface PrevArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const NextArrow: React.FC<ArrowProps> = (props): React.ReactElement => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-next-arrow`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        />
    );
};
const PrevArrow: React.FC<PrevArrowProps> = (props): React.ReactElement => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-prev-arrow`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        />
    );
};

const Feedback = (): React.JSX.Element => {
    const settings = {
        className: "center",
        centerMode: true,
        // infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        customPaging: (i: number): React.ReactElement => (
            <div className="custom-dot"></div>
        ),
        dotsClass: "slick-dots custom-dots"
    };
    return (
        <div>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className='px-14 py-6 font-extralight text-[#555555] text-center flex flex-col justify-center items-center gap-3 '>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
                        <div className='h-20 w-20 rounded-full overflow-hidden'>
                            <img src='https://i.ibb.co/qszbKLH/Ellipse-213.png' className='h-full w-full object-cover' alt="" />
                        </div>
                        <h4 className='text-[#555555] font-semibold'>Wade Warren</h4>
                        <p className='text-[#555555] font-thin'>Actor</p>
                    </div>
                    <div className='px-14 py-6 font-extralight text-[#555555] text-center flex flex-col justify-center items-center gap-3 '>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
                        <div className='h-20 w-20 rounded-full overflow-hidden flex justify-center items-center mx-auto'>
                            <img src='https://i.ibb.co/qszbKLH/Ellipse-213.png' className='h-full w-full object-cover ' alt="" />
                        </div>
                        <h4 className='text-[#555555] font-semibold'>Wade Warren</h4>
                        <p className='text-[#555555] font-thin'>Actor</p>
                    </div>
                    <div className='px-14 py-6 font-extralight text-[#555555] text-center flex flex-col justify-center items-center gap-3 '>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
                        <div className='h-20 w-20 rounded-full overflow-hidden'>
                            <img src='https://i.ibb.co/qszbKLH/Ellipse-213.png' className='h-full w-full object-cover' alt="" />
                        </div>
                        <h4 className='text-[#555555] font-semibold'>Wade Warren</h4>
                        <p className='text-[#555555] font-thin'>Actor</p>
                    </div>
                    <div className='px-14 py-6 font-extralight text-[#555555] text-center flex flex-col justify-center items-center gap-3 '>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
                        <div className='h-20 w-20 rounded-full overflow-hidden'>
                            <img src='https://i.ibb.co/qszbKLH/Ellipse-213.png' className='h-full w-full object-cover' alt="" />
                        </div>
                        <h4 className='text-[#555555] font-semibold'>Wade Warren</h4>
                        <p className='text-[#555555] font-thin'>Actor</p>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Feedback
