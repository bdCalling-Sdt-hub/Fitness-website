import React, { useEffect } from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading'
import MetaTag from '../components/common/MetaTag'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Store/hook';
import { GetToCart } from '../States/Cart/GetToCartSlice';
import { ServerUrl } from '../AxiosConfig/Config';
import { Empty } from 'antd';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { DeleteCart } from '../States/Cart/DeleteCartSlice';
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
    const { cart } = useAppSelector(state => state.GetToCart)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(GetToCart())
    }, [])
    const handleDelete = (id: any) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(DeleteCart({ id: id })).then((res) => {
                    if (res.type == 'DeleteCart/fulfilled') {
                        Swal.fire({
                            title: "removed!",
                            text: "Your file has been removed.",
                            icon: "success",
                            timer:1500,
                            showConfirmButton:false
                        }).then(()=>dispatch(GetToCart()));
                    }
                })
            }
        });
    }
    return (
        <div className='container mx-auto'>
            <Navigation name='Cart' />
            <Heading title='Cart history' style='mb-6' />
            <MetaTag title='Cart' />
            <div className='flex flex-col gap-6 items-start justify-start py-10'>
                {
                    cart?.length <= 0 && <div className='w-full h-[50vh] flex flex-col justify-center items-center'>
                        <Empty />
                    </div>
                }
                {
                    cart?.map(item => <div key={item?._id} style={{
                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                    }} className='flex justify-between items-center gap-4 flex-wrap w-full p-2'>
                        <div className='w-28 h-28 rounded-xl overflow-hidden'>
                            <img className='h-full w-full object-contain' src={`${ServerUrl}/${item?.productId?.images[0]}`} alt="" />
                        </div>
                        <div>
                            <p className='text-[16px] text-lg lg:text-2xl text-[#555555]'>{item?.productId?.productName}</p>
                            {/* <p className='text-[20px] text-2xl lg:text-3xl text-[#555555]'>${item?.productId?.price}</p> */}
                        </div>
                        <p className='text-[14px] lg:text-2xl text-[#555555]'>{item?.productId?.date.split('T')[0]}</p>
                        <p className='text-[18px] md:text-2xl lg:text-3xl text-[#555555]'>{item?.quantity}</p>
                        <p className='text-[18px] md:text-2xl lg:text-3xl text-[#555555]'>${item?.productId?.price}</p>
                        <div className='flex justify-end items-center gap-2'>
                            <Link to={`/product-details/${item?.productId?._id}`}>
                                <button className='px-10 py-3 bg-[#2F2F2F] text-[#FEFEFE]'>Confirm Order</button>
                            </Link>
                            <button onClick={() => handleDelete(item?._id)} className=' text-3xl text-red-600'>
                                <MdDelete />
                            </button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Cart
