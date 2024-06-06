import React, { useEffect } from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading'
import { useAppDispatch, useAppSelector } from '../Store/hook'
import { PrivecyPolicy } from '../States/PrivecyPolicy/PrivecyPolicySlice'

const PrivacyPolicy = (): React.JSX.Element => {
    const {PrivecyPolicyData}=useAppSelector(state=>state.PrivecyPolicy)
    console.log(PrivecyPolicyData)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(PrivecyPolicy())
    }, [])
    return (
        <div className='container pb-20'>
            <Navigation name='Privacy Policy' />
            <Heading title='Privacy Policy' style='mb-6' />

            <div dangerouslySetInnerHTML={{ __html: PrivecyPolicyData[0]?.description }}>
            </div>

        </div>
    )
}

export default PrivacyPolicy