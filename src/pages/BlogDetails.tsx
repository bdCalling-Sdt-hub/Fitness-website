import React, { useEffect } from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading';
import MetaTag from '../components/common/MetaTag';
import { useAppDispatch, useAppSelector } from '../Store/hook';
import { useParams } from 'react-router-dom';
import { GetSingleBlog } from '../States/Blog/GetSingleBlogSlice';
import { ServerUrl } from '../AxiosConfig/Config';

const BlogDetails = (): React.JSX.Element => {
    const { SingleBlog } = useAppSelector(state => state.SingleBlog)
    const dispatch = useAppDispatch()
    const { id } = useParams()
    useEffect(() => {
        dispatch(GetSingleBlog({ id }))
    }, [])
    return (
        <div className='container pb-20'>
            <Navigation name='Blog Details' optional="blogs" />
            <Heading title='Blog Details' style='mb-6' />
            <MetaTag title='Blog Details' />

            {/* Heading  of particular blog*/}
            <h1 className='text-secondary font-normal text-[32px] leading-[43px] mb-4'>{SingleBlog?.title}</h1>
            <p className='text-secondary font-normal text-[18px] leading-[25px] mb-10'>Topic: {SingleBlog?.topic} | {SingleBlog?.createdAt.split('T')[0]}</p>

            <div>
                <div className='w-full h-[500px]'>
                    <img src={`${ServerUrl}/${SingleBlog?.images[0]}`} alt="" className='my-6 w-full h-full object-cover ' />
                </div>
                <p className='text-secondary text-[16px] leading-[30px] font-normal mt-6'>
                    {SingleBlog?.description}
                </p>
            </div>

        </div>
    )
}

export default BlogDetails