
import type { FormProps, GetProp } from 'antd';
import { Button, Col, Form, Input, Row } from 'antd';
import { OTPProps } from 'antd/es/input/OTP';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};


const Payment = () => {
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onChange: GetProp<typeof Input.OTP, 'onChange'> = (text) => {
        console.log('onChange:', text);
    };
    const sharedProps: OTPProps = {
        onChange,
    };
    return (
        <div className="px-14 py-4 payment">
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#555555]">Payment</h3>
            <div className="flex justify-center items-center mx-auto w-[200px] h-[120px] my-5 rounded-lg overflow-hidden">
                <img className="h-full w-full object-cover" src="https://i.ibb.co/ymTdpBF/et-instant-access-to-your-money-with-the-paypal-cash-paypal-cash-card-mastercard-11563434343fm9cu4v8.png" alt="" />
            </div>
            <Form
                onFinish={onFinish}
                layout='vertical'
            >
                <Form.Item
                    name="cardnumber"
                    rules={[{ required: true, message: 'Please input your Card Number!' }]}

                >
                    <Input
                        placeholder='Card Number'
                        style={{
                            width: "100%",
                            height: 48,
                            borderBottom: "2px solid #9494943D",

                        }}
                    />
                </Form.Item>
                <Row gutter={8}>

                    <Col
                        xs={{ flex: '100%' }}
                        sm={{ flex: '50%' }}
                    >
                        <Form.Item
                            name="expiredate"
                            rules={[{ required: true, message: 'Please input your card expire date!' }]}

                        >
                            <Input
                                placeholder='MM/YY'
                                style={{
                                    width: "100%",
                                    height: 48,
                                    borderBottom: "2px solid #9494943D",

                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col
                        xs={{ flex: '100%' }}
                        sm={{ flex: '50%' }}
                    >
                        <Form.Item
                            name="cvc"
                            rules={[{ required: true, message: 'Please input your CVC' }]}

                        >
                            <Input
                                placeholder='CVC'
                                style={{
                                    width: "100%",
                                    height: 48,
                                    borderBottom: "2px solid #9494943D",

                                }}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <div className='flex justify-between items-center gap-2 w-full border-b-2 pb-2 mb-6'>
                    <p>Total Amount</p>
                    <p>$155.00</p>
                </div>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{
                        background: '#3C3C3C',
                        color: '#F7F7F7',
                        display: 'block',
                        width:'100%',
                        height:'48px'
                    }}>
                        Confirm Pay
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Payment
