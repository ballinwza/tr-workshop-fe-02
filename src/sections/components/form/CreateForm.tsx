'use client'
import { FC, useEffect, useState } from 'react'
import type { FormProps } from 'antd'
import { Dropdown, Form, Input, message } from 'antd'
import type { MenuProps } from 'antd'

import { useForm } from 'antd/es/form/Form'
import { usePlacardFormStore } from '@/modules/placard/adapter/inbound/store/placardForm.store'

import { getCommunityEnumValues } from '@/sections/shared/enums/community.enum'
import { capitalize } from 'radash'
import { Textarea } from '@headlessui/react'
import Image from 'next/image'
import Button from '../button/Button'

import { IPlacardForm } from '@/modules/placard/domain/model/placardForm.model'

interface Props {
    onSubmit: () => void
    onCancel: () => void
}
const CreateForm: FC<Props> = ({ onSubmit, onCancel }: Props) => {
    const { saveForm } = usePlacardFormStore((state) => state)

    const [text, SetText] = useState<string>('Choose a community')
    const [contactForm] = useForm()

    useEffect(() => {
        if (contactForm) {
            contactForm.validateFields()
        }
    }, [])

    const onFinish: FormProps<IPlacardForm>['onFinish'] = (values) => {
        onSubmit()

        if (contactForm.getFieldValue('userId')) {
            saveForm(values)
            message.success('Success')
        }
    }

    const onFinishFailed: FormProps<IPlacardForm>['onFinishFailed'] = (
        errorInfo,
    ) => {
        message.error('Unsuccess')
        console.log('Failed:', errorInfo)
    }

    const items: MenuProps['items'] = getCommunityEnumValues().map((menu) => {
        return {
            label: <div className="w-full h-full">{capitalize(menu)}</div>,
            key: menu,
        }
    })

    return (
        <Form
            form={contactForm}
            name="contact-form"
            className="w-full"
            labelCol={{
                sm: { span: 24 },
                md: { span: 4 },
                lg: { span: 3 },
                xxl: { span: 2 },
            }}
            wrapperCol={{ sm: { span: 24 }, md: { span: 16 } }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<IPlacardForm> name="id" initialValue={null} noStyle />
            <Form.Item<IPlacardForm>
                name="userId"
                initialValue={null}
                noStyle
            />

            <Form.Item<IPlacardForm>
                name="community"
                rules={[
                    { required: true, message: 'Please select some Community' },
                ]}
                wrapperCol={{ span: 24 }}
            >
                <Dropdown
                    className={
                        'flex gap-2 justify-center items-center bg-white px-4 py-2.5 w-full border border-success rounded-lg text-success cursor-pointer ' +
                        'md:w-fit md:justify-start'
                    }
                    menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['2'],
                        onClick: (e) => {
                            contactForm.setFieldValue('community', e.key)
                            SetText(capitalize(e.key))
                        },
                    }}
                    trigger={['click']}
                >
                    <div
                        onClick={(e) => {
                            e.preventDefault()
                        }}
                    >
                        <div>{text}</div>
                        <div>
                            <Image
                                src={'/icons/arrow-down-success-icon.svg'}
                                alt="arrow down icon"
                                width={10}
                                height={5}
                            />
                        </div>
                    </div>
                </Dropdown>
            </Form.Item>

            <Form.Item<IPlacardForm>
                name="title"
                rules={[{ required: true, message: 'Please fill some title' }]}
                wrapperCol={{ span: 24 }}
            >
                <Input
                    className="border-grey-100 border px-3.5 py-2.5 rounded-lg"
                    type="text"
                    placeholder="Title"
                />
            </Form.Item>

            <Form.Item<IPlacardForm>
                name="description"
                rules={[
                    { required: true, message: 'Please fill some description' },
                ]}
                wrapperCol={{ span: 24 }}
            >
                <Textarea
                    className="border-grey-100 h-[234px] text-top border px-3.5 py-2.5 rounded-lg w-full"
                    placeholder="What's on your mind..."
                />
            </Form.Item>

            <Form.Item label={null} wrapperCol={{ span: 24 }}>
                <div className="flex justify-end gap-3">
                    <Button onClick={onCancel} theme="light">
                        Cancel
                    </Button>
                    <Button htmlType="submit">Post</Button>
                </div>
            </Form.Item>
        </Form>
    )
}

export default CreateForm
