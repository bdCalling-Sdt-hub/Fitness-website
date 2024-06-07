import React, { useEffect, useState } from 'react';
import Navigation from '../components/common/Navigation';
import MetaTag from '../components/common/MetaTag';
import Heading from '../components/common/Heading';
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import Button from '../components/common/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import RelatedProduct from '../components/RelatedProduct';
import { Modal } from 'antd';
import Payment from '../components/Payment';
import { useAppDispatch, useAppSelector } from '../Store/hook';
import { SingleProduct } from '../States/Shop/ProductDetailsSlice';
import { ServerUrl } from '../AxiosConfig/Config';
import { AddToCart } from '../States/Cart/AddToCartSlice';
import Swal from 'sweetalert2';
import { PlaceOrder } from '../States/Order/PlaceOrderSlice';
const ProductDetails = (): React.JSX.Element => {
    const [showPaymentOptions, setshowPaymentOptions] = useState(false)
    const [banerImageIndex, setbanerImageIndex] = useState(0)
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const [quantity, setQuantity] = useState(1)
    const { Product } = useAppSelector(state => state.SingleProduct)
    const [paymentStatus, setPaymentStatus,] = useState<any>('')
    const navigate = useNavigate()
    useEffect(() => {
        if (paymentStatus?.status === 'paid') {
            let date = new Date();
            date.setDate(date.getDate() + 7);
            console.log('order')
            dispatch(PlaceOrder({
                location: paymentStatus?.address,
                contactNumber: paymentStatus?.phone,
                deliveryDate: date.toISOString().split('T')[0],
                paymentMethod: paymentStatus?.transactionID,
                product: paymentStatus?.productId,
                paymentStatus: paymentStatus?.status,
                quantity: paymentStatus?.quantity,
                totalAmount: paymentStatus?.amount,
            })).then((res) => {
                if (res.type == 'PlaceOrder/fulfilled') {
                    navigate('/order')
                }
            })
        }
    }, [paymentStatus])
    useEffect(() => {
        if (id) {
            dispatch(SingleProduct({ id: id }))
        }
    }, [id])
    const handelAddToCart = () => {
        dispatch(AddToCart({ id: id, quantity: quantity }))
            .then((res) => {
                console.log(res);
                if (res.payload.message === 'Already added your cart list') {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Already added your cart list",
                    });
                }
                if (res.type === 'AddToCart/fulfilled') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Item added to your cart list",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div className='container pb-20'>
            <Navigation name='Product Details' />
            <MetaTag title='Product Details' />
            <Heading title='Product Details' style='mb-6' />

            <div className='md:grid md:grid-cols-2 flex flex-col gap-10 items-start md:items-center'>
                <div>
                    <div className='w-full  border p-10'>
                        <img src={`${ServerUrl}/${Product?.images[banerImageIndex]}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} alt="" />
                    </div>
                    <div className='grid grid-cols-4 gap-[14px] mt-[14px]'>
                        {
                            Product?.images?.map((item: unknown, index) => {
                                return (
                                    <div onClick={() => setbanerImageIndex(index)} key={index} className=' cursor-pointer h-[160px] flex items-center justify-center border border-[#DADADA] p-3'>
                                        <img src={`${ServerUrl}/${item}`} alt="" />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                {
                    showPaymentOptions ? <div>
                        <Payment setPaymentStatus={setPaymentStatus} data={{ ...Product, price: Number(quantity) * Number(Product?.price), quantity }} />
                        <button onClick={() => setshowPaymentOptions(false)} className='w-[81.5%] mx-auto block text-white bg-red-600 mt-6 py-3 '>
                            Cancel
                        </button>
                    </div> : <>
                        <div className=''>
                            <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-[40px] leading-[54px] text-secondary font-normal mb-2'>{Product?.productName}</h1>
                            <p className='lg:text-[20px] text-[16px] leading-[27px] text-secondary font-normal mb-6'>${Product?.price}</p>

                            <p className='text-[16px] leading-[21px] text-secondary font-normal mb-4'>Quantity</p>
                            <div className='border w-[160px] h-[48px] flex items-center justify-between px-4 mb-10'>
                                <button disabled={quantity === 0} onClick={() => setQuantity(quantity - 1)}>
                                    <HiOutlineMinusSm className='text-secondary' size={24} />
                                </button>
                                <p className='text-[16px] leading-[21px] text-secondary font-normal'>{quantity}</p>
                                <button onClick={() => setQuantity(quantity + 1)}>
                                    <HiOutlinePlusSm className='text-secondary' size={24} />
                                </button>
                            </div>

                            <button onClick={handelAddToCart} className='border border-secondary text-secondary w-full mb-6 py-3' >
                                Add to Cart
                            </button>
                            <Button onSubmit={() => setshowPaymentOptions(true)} label='Buy Now' style='bg-secondary text-[#FBFBFB] w-full mb-10' />

                            <p className='text-[16px] leading-[40px] text-secondary font-normal mb-4'>
                                {Product?.description}
                            </p>
                        </div>
                    </>
                }


            </div>

            <div className='w-full h-[1px] bg-[#C2C2C2] my-10' />

            <div className='flex items-center justify-between mb-6'>
                <Heading title='You may also like' />
                <Link to={"/shop"} className='text-[16px] text-primary leading-5 font-medium underline'>
                    View All
                </Link>
            </div>
            <RelatedProduct id={id} gender={Product?.gender} />
            {/* <Modal
                open={openPaymentModal}
                onCancel={() => setOpenPaymentModal(false)}
                centered
                footer={false}
                width={800}
            >
                <Payment />
            </Modal> */}
        </div>
    )
}

export default ProductDetails