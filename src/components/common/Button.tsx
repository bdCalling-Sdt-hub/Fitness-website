/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface IButton {
    label: string;
    style?: string;
    onSubmit?:(values: any)=> void;
}

const Button:React.FC<IButton> = ({ label, style, onSubmit }) => {
    const handleSubmit=(values:any)=>{
        if (onSubmit) {
            onSubmit(values);
        }
    }
    return (
        <button
            onClick={handleSubmit} 
            style={{
                outline: "none",
                borderRadius: 4,
                height: 48
            }}
            className={`font-normal text-[16px] leading-5 ${style}`}
        >
            {label}
        </button>
    )
}

export default Button