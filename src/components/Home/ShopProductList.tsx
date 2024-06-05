import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import Heading from '../common/Heading';
import { useAppDispatch, useAppSelector } from '../../Store/hook';
import { ShopItems } from '../../States/Shop/ShopSlice';
import { ServerUrl } from '../../AxiosConfig/Config';
interface IItemProps {
    _id: string,
    productName: string,
    gender: string,
    date: string,
    price: string,
    images: [string],
    description: string,
    createdAt: string,
    updatedAt: string,
    id: string,
}

const ShopProductList = (): React.JSX.Element => {
    const dispatch = useAppDispatch()
    const { Products } = useAppSelector(state => state.ShopItems)
    useEffect(() => {
        dispatch(ShopItems({ page: 1, limit: 4, sort: '', searchTerm: '' }))
    }, [])
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className='flex items-center justify-between mb-6'>
                <Heading title='Shop' style='mb-0' />
                <Link to={"/shop"} className='text-[16px] text-primary leading-5 font-medium underline'>
                    View All
                </Link>
            </div>

            <div className='flex items-start md:items-center justify-start md:grid md:grid-cols-2 flex-col lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-10'>
                {
                    Products?.slice(0, 4)?.map((item: IItemProps) => {
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
                                }}>
                                    <BsCart2 size={24} color='#905A00' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShopProductList