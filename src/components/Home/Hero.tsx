import React, { useEffect, useState } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import { useAppDispatch, useAppSelector } from '../../Store/hook';
import { GetBannerData } from '../../States/Banner/BannerDataSlice';
import baseURL, { ServerUrl } from '../../AxiosConfig/Config';
import { Link } from 'react-router-dom';
const Hero = (): React.JSX.Element => {
    const [token, setToken] = useState<any>(null)
    const dispatch = useAppDispatch()
    const { BannerData } = useAppSelector(state => state.GetBannerData)
    useEffect(() => {
        dispatch(GetBannerData())
    }, [])
    useEffect(() => {
        baseURL.get('discount/get-active-discount', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then((res) => {
            if (res?.data?.success) {
                setToken(res?.data?.data)
            }
        })
    }, [])
    console.log(BannerData)
    return (
        <>
            <div className='relative w-full' style={{ height: "calc(100vh - 0px)" }}>
                <video autoPlay muted loop>
                    {
                        BannerData?.video && <source src={`${ServerUrl}${BannerData?.video}`} />
                    }
                </video>

                <div className='absolute top-0 left-0 flex items-center justify-center w-[100%] h-[100%]' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} >
                    <div className=''>
                        <h1 style={{
                            lineHeight: '60px'
                        }} className='text-[#F2F2F2] text-2xl md:text-4xl xl:text-5xl max-w-4xl leading-[300px] font-light text-center'>{BannerData?.title}</h1>
                        <Link to={`/free-class`}
                            style={{
                                width: 226,
                                border: "none",
                                outline: "none",
                                borderRadius: 4,
                                height: 56,
                                margin: "56px auto 0 auto"
                            }}
                            className='
                            bg-primary
                            flex flex-row-reverse items-center justify-center gap-1 
                            text-[#F2F2F2] font-normal text-[16px] leading-5
                        '
                        >
                            <MdOutlineArrowOutward color='#F2F2F2' size={24} />
                            {BannerData?.buttonName || 'Join The Team'}
                        </Link>
                        {
                            token && <div className='bg-primary absolute bottom-[-50px] w-[70%] left-[50%] translate-x-[-50%] text-center h-[100px] flex flex-col justify-center items-center gap-2 box-border'>
                                {token?.map((item: any) => <p key={item?._id}>get {item?.discountPercent}% discount by using  <strong className='text-white'>{item?.code}</strong> this code</p>)}
                            </div>
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero