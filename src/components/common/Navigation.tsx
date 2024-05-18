import React from 'react';
import { RiHome5Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

interface IProps{
    name: string;
    optional?: string;
}


const Navigation:React.FC<IProps> = ( {name, optional})=> {
    return (
        <div className='my-6 flex items-center gap-6'>
            <Link to={"/"}>
                <RiHome5Fill size={24} color='#919191' />
            </Link>
            <p className='font-normal text-[16px] leading-3 text-secondary'>/</p>
            { optional &&  <Link to={`/${optional}`}>  <p className='font-normal text-[16px] capitalize leading-3 text-secondary'>{optional}</p> </Link> }
            { optional && <p className='font-normal text-[16px] leading-3 text-secondary'>/</p> }
            <p className='font-normal text-[16px] leading-3 text-secondary'>{name}</p>
        </div>
    )
}

export default Navigation