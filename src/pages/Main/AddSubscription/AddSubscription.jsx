import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { Form, Input, Button, Select, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { Option } = Select;
import { FaAngleLeft } from "react-icons/fa6";


const AddSubscription = () => {
    const [form] = Form.useForm();
    const [features, setFeatures] = useState([""]);

    const addFeature = () => {
        setFeatures([...features, ""]);
    };

    const removeFeature = (index) => {
        const newFeatures = features.filter((_, i) => i !== index);
        setFeatures(newFeatures);
    };

    const onFinish = (values) => {
        console.log('Form Values:', values);
    };
    const navigate = useNavigate();

    return (
        <>
            <div className="flex items-center gap-2 text-xl">
                <FaAngleLeft />
                <h1>Add Subscription</h1>
            </div>
            <div className="rounded-lg py-4 border-lightGray border-2 shadow-lg mt-8 bg-white">
                <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
                    <h3 className="text-2xl text-[#345C8C] mb-4 border-b-2 border-[#345C8C]/50 pb-3 pl-16">
                        Subscription Package Adding
                    </h3>
                    <div className="w-full px-16">
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                        // style={{ maxWidth: 600, margin: '0 auto' }}
                        >
                            {/* Section 1 */}
                            <Space direction="vertical" style={{ width: '100%' }}>
                                <Space size="large" direction="horizontal" style={{ width: '100%' }}>
                                    <Form.Item
                                        label="Package Name"
                                        name="packageName"
                                        style={{ flex: 1, width: '400px' }}
                                    // rules={[{ required: true, message: 'Please select a package name!' }]}
                                    >
                                        <Select placeholder="Select Package" style={{ height: '40px' }}>
                                            <Option value="basic">Basic</Option>
                                            <Option value="premium">Premium</Option>
                                            <Option value="enterprise">Enterprise</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        label="Package Amount"
                                        name="packageAmount"
                                        style={{ flex: 1, width: '400px' }}
                                    // rules={[{ required: true, message: 'Please enter the package amount!' }]}
                                    >
                                        <Input type="number" placeholder="Enter Amount" style={{ height: '40px' }} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Package Duration"
                                        name="packageDuration"
                                        style={{ flex: 1, width: '400px' }}
                                    // rules={[{ required: true, message: 'Please select a duration!' }]}
                                    >
                                        <Select placeholder="Select Duration" style={{ height: '40px' }}>
                                            <Option value="1_month">1 Month</Option>
                                            <Option value="3_months">3 Months</Option>
                                            <Option value="1_year">1 Year</Option>
                                        </Select>
                                    </Form.Item>
                                </Space>
                            </Space>

                            {/* Section 2 */}
                            <Form.Item label="Package Features">
                                {features.map((feature, index) => (
                                    <Space key={index} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                        <Input
                                            placeholder="Enter feature"
                                            value={feature}
                                            onChange={(e) => {
                                                const newFeatures = [...features];
                                                newFeatures[index] = e.target.value;
                                                setFeatures(newFeatures);
                                            }}
                                        />
                                        {features.length > 1 && (
                                            <MinusCircleOutlined
                                                style={{ color: 'red' }}
                                                onClick={() => removeFeature(index)}
                                            />
                                        )}
                                    </Space>
                                ))}
                                <Button type="dashed" onClick={addFeature} icon={<PlusOutlined />} block>
                                    Add Feature
                                </Button>
                            </Form.Item>

                            {/* Submit Button */}
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block>
                                    Create
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddSubscription
