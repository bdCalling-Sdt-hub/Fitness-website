import React, { useEffect } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Store/hook';
import { ShopItems } from '../States/Shop/ShopSlice';
import { ServerUrl } from '../AxiosConfig/Config';
import { AddToCart } from '../States/Cart/AddToCartSlice';
import Swal from 'sweetalert2';

interface IItemProps {
    name: string;
    image: string;
    price: string;
}
interface ChildProp {
    id: string | null | undefined
    gender: string | null | undefined
}
const RelatedProduct = ({ id, gender }: ChildProp): React.JSX.Element => {
    const dispatch = useAppDispatch()
    const { Products } = useAppSelector(state => state.ShopItems)
    useEffect(() => {
        dispatch(ShopItems({ page: 1, limit: 100, sort: '', searchTerm: '' }))
    }, [id])
    const navigate = useNavigate()
    const handelAddToCart = (id: any) => {
        dispatch(AddToCart({ id: id, quantity: 1 }))
            .then((res) => {
                if (res.payload.message === 'Already added your cart list') {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Already added your cart list",
                    });
                }
                if (res.type === 'AddToCart/fulfilled') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Item added to your cart list",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div className='flex flex-col items-start justify-start md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:items-center  gap-6 mt-10'>
            {
                Products?.filter(item => item?.gender === gender)?.slice(0, 4)?.map((item) => {
                    return (
                        <div onClick={(): void => {
                            navigate(`/product-details/${item?._id}`)
                        }}
                            key={item?._id}
                            className='relative group  rounded-lg border border-[#EEEEEE] p-5 cursor-pointer w-full'
                            style={{
                                boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                            }}
                        >
                            <div className='w-full h-[150px] rounded-md overflow-hidden'>
                                <img
                                    src={`${ServerUrl}${item?.images[0]}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', margin: "0 auto" }}
                                    alt=""
                                    className='group-hover:scale-105 transition-all duration-75'
                                />
                            </div>
                            <h1 className='text-[18px] font-normal leading-6 text-secondary mt-10'>{item?.productName}</h1>
                            <h1 className='lg:text-[32px] text-xl font-normal mt-2 text-secondary leading-[43px]'>${item?.price}</h1>

                            <div className='absolute top-4 right-4 bg-white p-1 rounded-full' onClick={(e) => {
                                (e.stopPropagation())
                                handelAddToCart(item?._id)
                            }}>
                                <BsCart2 size={24} color='#905A00' />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RelatedProduct