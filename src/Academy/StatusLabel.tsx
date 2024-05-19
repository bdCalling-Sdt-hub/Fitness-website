import React from 'react'

const StatusLabel = ():React.JSX.Element => {
    return (
        <div className='flex items-center gap-8 justify-center'>
            <div className='flex items-center gap-[10px]'>
                <div 
                    className='w-4 h-4 rounded-full bg-primary'
                    style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}
                />
                <p className='text-secondary text-[14px] leading-[10px] font-light'>Complete</p>
            </div>
            <div className='flex items-center gap-[10px]'>
                <div 
                    className='w-4 h-4 rounded-full bg-white'
                    style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}
                />
                <p className='text-secondary text-[14px] leading-[10px] font-light'>Incomplete</p>
            </div>
        </div>
    )
}

export default StatusLabel