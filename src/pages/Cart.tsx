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
        price: '150 CND',
        time: '05/12/2024',
        quantity: '02',
    },
    {
        key: '1',
        name: 'The Dumbbell',
        img: 'https://i.ibb.co/TcBnDLP/Rectangle-5089.png',
        price: '150 CND',
        time: '05/12/2024',
        quantity: '02',
    },
    {
        key: '1',
        name: 'The Dumbbell',
        img: 'https://i.ibb.co/TcBnDLP/Rectangle-5089.png',
        price: '150 CND',
        time: '05/12/2024',
        quantity: '02',
    },
    {
        key: '1',
        name: 'The Dumbbell',
        img: 'https://i.ibb.co/TcBnDLP/Rectangle-5089.png',
        price: '150 CND',
        time: '05/12/2024',
        quantity: '02',
    },
];


const Cart = (): React.JSX.Element => {

    return (
        <div className='container mx-auto'>
            <Navigation name='Cart' />
            <Heading title='Cart history' style='mb-6' />
            <MetaTag title='Cart' />
            <div className='flex flex-col gap-2 items-start justify-start py-10'>
                {
                    dataSource?.map(item => <div className='flex justify-between items-center gap-4 flex-wrap w-full'>
                        <div className='w-28 h-28 rounded-xl overflow-hidden'>
                            <img className='h-full w-full object-cover' src={item?.img} alt="" />
                        </div>
                        <div>
                            <p className='text-lg lg:text-2xl text-[#555555]'>The Dumbbell</p>
                            <p className='text-2xl lg:text-3xl text-[#555555]'>150 CND</p>
                        </div>
                        <p className='text-lg lg:text-2xl text-[#555555]'>05/12/2024</p>
                        <p className='text-2xl lg:text-3xl text-[#555555]'>02</p>
                        <p className='text-2xl lg:text-3xl text-[#555555]'>150 CND</p>
                        <Link to={`/product-details/item?._id`}>
                            <button className='px-10 py-3 bg-[#2F2F2F] text-[#FEFEFE]'>Confirm Order</button>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Cart
