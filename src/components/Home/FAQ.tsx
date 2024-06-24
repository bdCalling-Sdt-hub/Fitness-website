/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'
import Heading from '../common/Heading';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { GetFAQ } from '../../States/FAQ/GetFAQSlice';
import { useAppDispatch, useAppSelector } from '../../Store/hook';
type ContentRef = HTMLDivElement | null;
const FAQ = (): React.JSX.Element => {
    const [tab, setTab] = useState<boolean>(false);
    const [tabID, setTabID] = useState<number>();
    const dispath = useAppDispatch()
    const { FAQData } = useAppSelector(state => state.GetFAQ)
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<ContentRef[]>([]);
    useEffect(() => {
        //@ts-ignore
        dispath(GetFAQ())
    }, [])
    const toggleAccordion = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    useEffect(() => {
        if (openIndex !== null && contentRefs.current[openIndex]) {
            contentRefs.current[openIndex]!.style.maxHeight = `${contentRefs.current[openIndex]!.scrollHeight}px`;
        }
        contentRefs.current.forEach((ref, index) => {
            if (ref && index !== openIndex) {
                ref.style.maxHeight = '0px';
            }
        });
    }, [openIndex]);
    console.log(FAQData)
    return (
        <div className='container'>
            <Heading title='Frequently Asked Questions' style='text-center' />

            <div className='mt-10'>
                <div className='grid grid-cols-1 gap-6'>
                    {
                        FAQData.map((_item: any, index) => {
                            return (
                                <div onClick={() => toggleAccordion(index)} key={_item?._id}
                                    ref={(el) => (contentRefs.current[index] = el)}
                                    className='accordion-content overflow-hidden transition-max-height duration-300 ease-in-out p-7 pt-2 rounded-[4px] border border-secondary   border-opacity-[12%] cursor-pointer relative'
                                    style={{
                                        maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px'
                                    }}
                                >
                                    <MdKeyboardArrowRight className={`absolute top-[6px] right-2 border rounded-full text-2xl transition-all ${openIndex === index ? 'rotate-90' : ''} `} />
                                    <p className='text-[20px] leading-5 font-normal text-secondary'>{_item?.question}</p>
                                    <div className='text-[16px] leading-6 font-normal text-secondary mt-2'>
                                        {_item?.answer}
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default FAQ;