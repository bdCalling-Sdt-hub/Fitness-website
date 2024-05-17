import React from 'react'
import { Modal as AntModal } from 'antd';

interface IProps{
    open: boolean;
    setOpen:(open: boolean)=> void;
    body?: React.ReactElement;
}

const Modal: React.FC<IProps> = ( { open, setOpen, body }):React.JSX.Element => {
    console.log(open, setOpen, body)

    const handleClose=()=>{
        setOpen(false)
    }
    return (
        <>
            <AntModal 
                centered
                open={open}  
                onCancel={handleClose}
                footer={false}          
            >
                <div>
                    {body}
                </div>
            </AntModal>
        </>
    )
}

export default Modal