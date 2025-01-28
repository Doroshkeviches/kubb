'use client'
import { Create, useForm, useSelect } from '@refinedev/antd'
import { Form, Input, Select } from 'antd'

export function UpdateUser() {
  const { formProps, saveButtonProps } = useForm({})
  const { selectProps: categorySelectProps } = useSelect({
    resource: 'user',
  })
  const href = '/user/:username'

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={'Title'}
          name={['title']}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>
  )
}