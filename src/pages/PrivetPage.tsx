import React from 'react';
import { useAppSelector } from '../Store/hook';
import { Navigate } from 'react-router-dom';

interface PrivetPageProps {
    children: React.ReactNode;
}

const PrivetPage = ({ children }: PrivetPageProps): JSX.Element => {
    const { user ,loading: userloading}: any = useAppSelector(state => state.Profile)
    if (userloading) {
        return <div className='h-[500px] relative'>
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin  dark:border-violet-600"></div>
            </div>
        </div>
    }
    if (!user?.email) {
       return <Navigate to={`/`}></Navigate>
    }
    return <div>{children}</div>;
};

export default PrivetPage;
