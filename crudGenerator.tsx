import transformers from '@kubb/core/src/transformers/index.js'
import { URLPath } from '@kubb/core/utils'
import type { PluginOas } from '@kubb/plugin-oas'
import { createReactGenerator } from '@kubb/plugin-oas'
import { useOperationManager } from '@kubb/plugin-oas/hooks'
import { Const, File, Function, Text } from '@kubb/react'
import { group } from 'console'
import React from 'react'




export const example2 = createReactGenerator<PluginOas>({
  name: 'client-operation',
  Operation({ operation }) {
    const { getName, getFile , getGroup} = useOperationManager()
    const group = getGroup(operation)
    const client = {
      name: getName(operation, { type: 'type' }),
      file: getFile(operation, { extname: '.tsx',
        prefix: `${group?.tag}/`
      }),
      group,
      
    }
    console.log(client)
    return (
      <File baseName={client.file.baseName} path={client.file.path} meta={client.file.meta}>
        <File.Source>
          <Function name={transformers.pascalCase(operation.getOperationId())} export>
            <Const name={'href'}>"{new URLPath(operation.path).URL}"</Const>
            <br />
            <br />
            return
            <div className="test">
              hello world
              {`
              <a href={href}>Open ${operation.method}</a>
              `}
              <button type={'button'} onClick={(e) => console.log(e)}>
                Submit
              </button>
            </div>
          </Function>
        </File.Source>
      </File>
    )
  },
})
