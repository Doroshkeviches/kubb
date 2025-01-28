'use client'
import { Create, useForm, useSelect } from '@refinedev/antd'
import { Form, Input, Select } from 'antd'

export function UploadFile() {
  const { formProps, saveButtonProps } = useForm({})
  const { selectProps: categorySelectProps } = useSelect({
    resource: 'pet',
  })
  const href = '/pet/:petId/uploadImage'

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