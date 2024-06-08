import React, { useEffect, useState } from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading'
import MetaTag from '../components/common/MetaTag'
import { Pagination, PaginationProps, Select } from 'antd';
import { BsCart2 } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Store/hook';
import { ShopItems } from '../States/Shop/ShopSlice';
import { ServerUrl } from '../AxiosConfig/Config';
const { Option } = Select;
const Shop = (): React.JSX.Element => {
    const [searchTerm, setsearchTerm] = useState('');
    const [itemPerPage, setItemPerPage] = useState(10)
    const [page, setPage] = useState(1)
    const navigate = useNavigate()
    const [sortOrder, setSortOrder] = useState('')
    // const [category, setCategory] = useState<string[]>([])
    const dispatch = useAppDispatch()
    const location = useLocation()
    const { Products, meta } = useAppSelector(state => state.ShopItems)
    useEffect(() => {
        setsearchTerm(new URLSearchParams(window.location.search).get('search') || "")
    }, [location])
    useEffect(() => {
        dispatch(ShopItems({ page: page, limit: itemPerPage, sort: sortOrder, searchTerm: searchTerm }))
    }, [itemPerPage, page, sortOrder, searchTerm])
    // console.log(meta)
    const onChange: PaginationProps['onChange'] = (pageNumber) => {
        setPage(pageNumber)
    };
    const onShowSizeChange = (current: any, size: any) => {
        setItemPerPage(size);
    }
    return (
        <div className='container pb-20'>
            <Navigation name='Shop' />
            <MetaTag title='Shop' />
            <div className='flex justify-between items-center gap-2 flex-wrap'>
                <Heading title='Shop' />
                <div className='max-w-[500px] min-w-[380px] gap-[1%] flex justify-end items-center '>
                    <Select onChange={(e) => {
                        setSortOrder(e)
                    }}
                        style={{
                            width: "49.5%",
                            height: 48,
                            border: "1px solid #E7EBED",
                            outline: "none",
                            borderRadius: 8,
                        }}
                        className="poppins-regular text-[#6A6A6A] text-[14px] leading-5"
                        defaultValue={"Sort By"}
                    >
                        <Option value="productName">name Low to High</Option>
                        <Option value="-productName">name High to Low</Option>
                        <Option value="price">price Low to High</Option>
                        <Option value="-price">price  High to Low</Option>
                    </Select>
                    {/* <Select
                        style={{
                            width: "49.5%",
                            height: 48,
                            border: "1px solid #E7EBED",
                            outline: "none",
                            borderRadius: 8
                        }}
                        className="poppins-regular text-[#6A6A6A] text-[14px] leading-5"
                        value={"Category"}
                    >
                        <Option key={`1`}>
                            <label onClick={() => {
                                if (category.find(item => item == 'Starter Kit')) {
                                    const newCategory = category.filter(item => item != 'Starter Kit')
                                    //console.log(newCategory)
                                    setCategory(newCategory)
                                } else {
                                    setCategory([...category, 'Starter Kit'])
                                }
                            }} className='w-full flex justify-start items-center gap-2 z-50' htmlFor="Starter">
                                <input type="checkbox" name="" id="Starter" />
                                Starter Kit
                            </label>
                        </Option>
                        <Option key={`2`}>
                            <label onClick={() => {
                                if (category.find(item => item == 'Travel Kit')) {
                                    const newCategory = category.filter(item => item != 'Travel Kit')
                                    setCategory(newCategory)
                                } else {
                                    setCategory([...category, 'Travel Kit'])
                                }
                            }} className='w-full flex justify-start items-center gap-2 z-50' htmlFor="Travel">
                                <input type="checkbox" name="" id="Travel" />
                                Travel Kit
                            </label>
                        </Option>

                    </Select> */}
                </div>
            </div>

            <div className='flex flex-col items-start justify-start md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:items-center  gap-6 mt-10'>
                {
                    Products?.slice(0, 4)?.map((item) => {
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

            <div className='text-center mt-8'>
                <Pagination defaultCurrent={page} total={meta?.total} pageSize={itemPerPage} onShowSizeChange={onShowSizeChange} onChange={onChange} />
            </div>
        </div>
    )
}

export default Shop