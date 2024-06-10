import React, { useEffect, useState } from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading'
import MetaTag from '../components/common/MetaTag'
import { Input, Pagination, PaginationProps } from 'antd';
import { CgSearch } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Store/hook';
import { ServerUrl } from '../AxiosConfig/Config';
import { GetAllProgram } from '../States/Program/GetAllProgramSlice';

const Studio = (): React.JSX.Element => {
    const [keyword, setKeyword] = useState<string | undefined>("");
    const [itemPerPage, setItemPerPage] = useState(10)
    const [page, setPage] = useState(1)
    const dispatch = useAppDispatch()
    const { AllProgram, meta } = useAppSelector(state => state.GetAllProgram)
    const { myPlan ,loading } = useAppSelector(state => state.GetMySubscription)
    const navigate =useNavigate()
    if (!loading && !myPlan?.amount) {
        navigate('/')
    }
    useEffect(() => {
        dispatch(GetAllProgram({ page: page, limit: itemPerPage, title: keyword }))
    }, [keyword])
    const onChangePage: PaginationProps['onChange'] = (pageNumber) => {
        setPage(pageNumber)
    };
    const onShowSizeChange = (current: any, size: any) => {
        setItemPerPage(size);
    }
    return (
        <div className='container pb-20'>
            <Navigation name='Demand Library' />
            <Heading title='Studio' style='mb-6' />
            <MetaTag title='Academy' />

            <div className='customPlaceholder flex items-end gap-3 justify-end bg-primary p-2'>
                <Input
                    onChange={(e) => setKeyword(e.target.value)}
                    value={keyword}
                    placeholder='Search here...'
                    style={{
                        fontSize: 16,
                        lineHeight: "12px",
                        fontWeight: 400,
                        height: 48
                    }}
                    className='text-primary w-[416px]'
                    prefix={<CgSearch size={24} color='#905A00' />}
                    suffix={<IoClose onClick={() => setKeyword("")} className={`${keyword !== "" ? "block" : "none"} cursor-pointer`} size={24} color='#905A00' />}
                />
            </div>
            <div className='md:grid flex flex-col md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 justify-start md:items-center items-start py-8'>
                {AllProgram?.map(item => <div className='w-full h-full' key={item?._id}>
                    <div className='w-full h-60'>
                        <img className='w-full h-full object-cover' src={`${ServerUrl}${item?.image}`} alt="" />
                    </div>
                    <div className='flex justify-between items-center gap-2 flex-wrap mt-4'>
                        <h3 className='text-[#2F2F2F] text-lg md:text-2xl'>{item?.title}</h3>
                        <Link to={`/academy/${item?._id}`} className='py-2 px-6 bg-[#555555] text-white'>
                            Details
                        </Link>
                    </div>
                </div>)}
            </div>
            <div className='text-center mt-8'>
                <Pagination defaultCurrent={page} total={meta?.total} pageSize={itemPerPage} onShowSizeChange={onShowSizeChange} onChange={onChangePage} />
            </div>
        </div>
    )
}

export default Studio
