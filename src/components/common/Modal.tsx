import React from 'react'
import { Modal as AntModal } from 'antd';

interface IProps{
    open: boolean;
    setOpen:(open: boolean)=> void;
    body?: React.ReactElement;
    title?: string;
}

const Modal: React.FC<IProps> = ( { open, setOpen, body, title }):React.JSX.Element => {

    const handleClose=()=>{
        setOpen(false)
    }
    return (
        <>
            <AntModal
                title={title} 
                centered
                open={open} 
                onCancel={handleClose}
                footer={false}       
                width={600}
            >
                <div>
                    {body}
                </div>
            </AntModal>
        </>
    )
}

export default Modal