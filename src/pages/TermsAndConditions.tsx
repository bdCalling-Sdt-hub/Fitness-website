import React, { useEffect } from 'react'
import Navigation from '../components/common/Navigation'
import Heading from '../components/common/Heading'
import { useAppDispatch, useAppSelector } from '../Store/hook'
import { TermsConditions } from '../States/TermsConditions/TermsConditionsSlice'

const TermsAndConditions = ():React.JSX.Element => {
    const {TermsConditionsData}=useAppSelector(state=>state.TermsConditions)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(TermsConditions())
    }, [])
    return (
        <div className='container pb-20'>
            <Navigation name='Terms And Conditions' />
            <Heading title='Terms And Conditions' style='mb-6' />

            <div dangerouslySetInnerHTML={{ __html: TermsConditionsData[0]?.description }}>
            </div>

        </div>
    )
}

export default TermsAndConditions