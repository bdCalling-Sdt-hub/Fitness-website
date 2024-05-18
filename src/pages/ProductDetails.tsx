import React from 'react'
import Navigation from '../components/common/Navigation'
import MetaTag from '../components/common/MetaTag'
import Heading from '../components/common/Heading'

const ProductDetails = ():React.JSX.Element => {
    return (
        <div className='container pb-20'>
            <Navigation name='Product Details' />
            <MetaTag title='Product Details' />
            <Heading title='Product Details' style='mb-6' />

        </div>
    )
}

export default ProductDetails