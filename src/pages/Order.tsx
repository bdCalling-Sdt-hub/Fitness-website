import React from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading'
import MetaTag from '../components/common/MetaTag'
import { Link } from 'react-router-dom';
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
    return (
        <div className='container mx-auto'>
            <Navigation name='Cart' />
            <Heading title='Cart history' style='mb-6' />
            <MetaTag title='Cart' />
            <div className='flex flex-col gap-2 items-start justify-start py-10'>
                {
                    dataSource?.map(item => <div className='flex justify-between items-center gap-4 flex-wrap w-full'>
                        <div className='flex justify-start items-center gap-6'>
                            <div className='w-28 h-28 rounded-xl overflow-hidden'>
                                <img className='h-full w-full object-cover' src={item?.img} alt="" />
                            </div>
                            <div className='flex flex-col justify-start items-start gap-2 max-w-[350px]'>
                                <p className='grid grid-cols-9 gap-2 justify-start w-full text-[#555555]'><span className='col-span-4'>Product name</span><span className='col-span-1 text-center'>:</span> <span className='col-span-4'>{item?.name}</span></p>
                                <p className='grid grid-cols-9 gap-2 justify-start w-full text-[#555555]'><span className='col-span-4'>Date</span><span className='col-span-1 text-center'>:</span> <span className='col-span-4'>{item?.time}</span></p>
                                <p className='grid grid-cols-9 gap-2 justify-start w-full text-[#555555]'><span className='col-span-4'>Price</span><span className='col-span-1 text-center'>:</span> <span className='col-span-4'>{item?.price}</span></p>
                                <p className='grid grid-cols-9 gap-2 justify-start w-full text-[#555555]'><span className='col-span-4'>Order Location</span><span className='col-span-1 text-center'>:</span> <span className='col-span-4'>{item?.Location}</span></p>
                            </div>
                        </div>

                        <Link to={`/product-details/item?._id`}>
                            <button className='px-10 py-3 bg-[#2F2F2F] text-[#FEFEFE]'>Reorder</button>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    )
}
export default Order
