import React, { useEffect } from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading'
import MetaTag from '../components/common/MetaTag'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Store/hook';
import { GetAllOrder } from '../States/Order/GetAllOrderSlice';
import { ServerUrl } from '../AxiosConfig/Config';
import { Empty } from 'antd';
const dataSource = [
    {
        key: '1',
        name: 'The Dumbbell',
        img: 'https://i.ibb.co/TcBnDLP/Rectangle-5089.png',
        price: '$150',
        time: '05/12/2024',
        Location: '2464 Royal Ln. Mesa, New Jersey 45463',
    },

];

const Order = (): React.JSX.Element => {
    const dispatch = useAppDispatch()
    const { Order } = useAppSelector(state => state.GetAllOrder)
    useEffect(() => {
        dispatch(GetAllOrder())
    }, [])
    return (
        <div className='container mx-auto'>
            <Navigation name='Order' />
            <Heading title='Order history' style='mb-6' />
            <MetaTag title='Order' />
            <div className='flex flex-col gap-6 items-start justify-start py-10'>
                {
                    Order?.length <= 0 && <div className='w-full h-[50vh] flex flex-col justify-center items-center'>
                        <Empty />
                    </div>
                }
                {
                    Order?.map(item => <div style={{
                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                    }} className='flex justify-between items-center gap-4 flex-wrap w-full p-2'>
                        <div className='flex justify-start items-center gap-6 flex-wrap'>
                            <div className='w-28 h-28 rounded-xl overflow-hidden'>
                                <img className='h-full w-full object-cover' src={`${ServerUrl}/${item?.product?.images[0]}`} alt="" />
                            </div>
                            <div className='flex flex-col justify-start items-start gap-2 max-w-[350px]'>
                                <p className='grid grid-cols-9 gap-2 justify-start w-full text-[#555555]'><span className='col-span-4'>Product name</span><span className='col-span-1 text-center'>:</span> <span className='col-span-4 whitespace-nowrap'>{item?.product?.productName}</span></p>
                                <p className='grid grid-cols-9 gap-2 justify-start w-full text-[#555555]'><span className='col-span-4'>Date</span><span className='col-span-1 text-center'>:</span> <span className='col-span-4'>{item?.deliveryDate.split('T')[0]}</span></p>
                                <p className='grid grid-cols-9 gap-2 justify-start w-full text-[#555555]'><span className='col-span-4'>Price</span><span className='col-span-1 text-center'>:</span> <span className='col-span-4'>${item?.product?.price}</span></p>
                                <p className='grid grid-cols-9 gap-2 justify-start w-full text-[#555555]'><span className='col-span-4'>Order Location</span><span className='col-span-1 text-center'>:</span> <span className='col-span-4 whitespace-nowrap'>{item?.location}</span></p>
                            </div>
                        </div>

                        <Link to={`/product-details/${item?.product?._id}`}>
                            <button className='px-10 py-3 bg-[#2F2F2F] text-[#FEFEFE]'>Reorder</button>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    )
}
export default Order
