import transformers from '@kubb/core/src/transformers/index.js'
import { URLPath } from '@kubb/core/utils'
import type { PluginOas } from '@kubb/plugin-oas'
import { createReactGenerator } from '@kubb/plugin-oas'
import { useOperationManager } from '@kubb/plugin-oas/hooks'
import { Const, File, Function, Text } from '@kubb/react'
import { group } from 'console'
import React from 'react'


enum IPrefix {
  CREATE = 'create',
  EDIT = 'edit',
  SHOW = 'show'
}
enum IMethod {
  CREATE = 'create',
  GET = 'get',
  UPDATE = 'update'
}


export default function getPrefix(method: IMethod) {
  const lowwerCaseMethod = method.toLowerCase()
  if (lowwerCaseMethod.includes(IMethod.CREATE)) {
    return `${IPrefix.CREATE}/`
  } else if (lowwerCaseMethod.includes(IMethod.UPDATE)) {
    return `${IPrefix.EDIT}/`
  } else if (lowwerCaseMethod.includes(IMethod.GET)) {
    return `${IPrefix.SHOW}/`
  }
  return ''
}





export const example2 = createReactGenerator<PluginOas>({
  name: 'client-operation',
  Operation({ operation }) {
    const { getName, getFile, getGroup } = useOperationManager()
    const group = getGroup(operation)
    const client = {
      name: getName(operation, { type: 'file' }),
      file: getFile(operation, { extname: '.tsx', prefix: getPrefix(operation.schema.operationId) }),
    }
    console.log(operation)
    return (
      <File baseName={client.file.baseName} path={client.file.path} meta={client.file.meta} banner='"use client"' >
        <File.Import name={'{ Create, useForm, useSelect }'} path="@refinedev/antd" print />
        <File.Import name={'{ Form, Input, Select }'} path="antd" print />

        <File.Source>



          <Function name={transformers.pascalCase(operation.getOperationId())} export>
            <br />

            <Const name={'{ formProps, saveButtonProps }'}>{`useForm({})`}</Const>
            <br />

            <Const name={'{ selectProps: categorySelectProps }'}>{`useSelect({
            resource: "${group?.tag}",
          })`}</Const>
            <br />

            <Const name={'href'}>"{new URLPath(operation.path).URL}"</Const>
            <br />
            <br />
            return
            {`<Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Title"}
          name={["title"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>`}
          </Function>
        </File.Source>
      </File>
    )
  },
})
