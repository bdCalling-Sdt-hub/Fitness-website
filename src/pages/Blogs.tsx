import React, { useEffect, useState } from 'react';
import Navigation from '../components/common/Navigation';
import Heading from '../components/common/Heading';
import MetaTag from '../components/common/MetaTag';
import { LuCalendar } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Store/hook';
import { GetAllBlog } from '../States/Blog/GetAllBlogSlice';
import { Empty, Pagination, PaginationProps } from 'antd';
import { ServerUrl } from '../AxiosConfig/Config';
const Blogs = (): React.JSX.Element => {
    const [itemPerPage, setItemPerPage] = useState(10)
    const [page, setPage] = useState(1)
    const dispatch = useAppDispatch()
    const { AllBlog, meta } = useAppSelector(state => state.GetAllBlog)
    useEffect(() => {
        dispatch(GetAllBlog({ page: page, limit: itemPerPage, }))
    }, [])
    const onChange: PaginationProps['onChange'] = (pageNumber) => {
        setPage(pageNumber)
    };
    const onShowSizeChange = (current: any, size: any) => {
        setItemPerPage(size);
    }
    return (
        <div className='container pb-20'>
            <Navigation name='Blogs' />
            <Heading title='Blogs' style='mb-6' />
            <MetaTag title='Blogs' />
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex flex-col justify-start items-start md:items-center mt-10'>
                {
                    AllBlog.map((_item) => {
                        return (
                            <div key={_item?._id} className='group'>
                                <div className='overflow-hidden w-full h-[250px]'>
                                    <img src={`${ServerUrl}${_item?.images[0]}`} className='group-hover:scale-125 transition-all duration-300' style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
                                </div>
                                <div className='flex items-center gap-4 my-2'>
                                    <LuCalendar size={24} color='#555555' />
                                    <p className='text-secondary font-normal text-[16px] leading-[22px]'>{_item?.createdAt.split('T')[0]}</p>
                                    <p className='text-secondary font-normal text-[16px] leading-[22px]'>Topic : {_item?.topic}</p>
                                </div>
                                <p className='text-secondary font-medium text-[24px] leading-[34px] mb-2'>{_item?.title}</p>
                                <p className='text-secondary font-light text-[16px] leading-[29px] mb-6'>
                                    {_item?.title}
                                </p>
                                <Link to={`/blog-details/${_item?._id}`}>
                                    <button
                                        style={{
                                            width: "100%",
                                            outline: "none",
                                            borderRadius: 4,
                                            height: 48
                                        }}
                                        className='
                                            border border-primary
                                            text-primary font-normal text-[16px] leading-6
                                        '
                                    >
                                        Read more
                                    </button>
                                </Link>

                            </div>
                        )
                    })
                }
            </div>
            {
                AllBlog.length <= 0 && <Empty />
            }
            {
                AllBlog.length > 0 && <div className='text-center mt-8'>
                    <Pagination defaultCurrent={page} total={meta?.total} pageSize={itemPerPage} onShowSizeChange={onShowSizeChange} onChange={onChange} />
                </div>
            }

        </div>
    )
}



export default Blogs
// subtype : premium 