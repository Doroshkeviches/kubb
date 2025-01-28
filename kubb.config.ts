// import '@kubb/react/devtools' // enable/disable devtools
import { pluginClient } from '@kubb/plugin-client'

import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { example2 } from './crudGenerator'

export default defineConfig(() => {
  return {
    root: '.',
    input: {
      path: './swagger.json',
    },
    output: {
      path: './src/gen',
      clean: true,
    },
    plugins: [
      // pluginOas({
      //   validate: false,
      //   generators: [],
      //   serverIndex: 0,
      // }),
      // pluginTs({
      //   output: { path: 'models.ts' },
      // }),
      // pluginClient({
      //   group: {
      //     type: 'tag'
      //   }
      // }),
      // pluginRefine()
      pluginOas({
        output: {
          path: '../app',
        },
        group: {
          type: 'tag',
          name({ group }){
            return `${group}`
          }
        },
        
        validate: false,
        generators: [example2],
      }),
      // pluginTs(),
      // pluginRefine({
      //   // generators: [crudGenerator],
      //   group: {
      //     type: 'tag',
      //     name: ({ group }) => `'${group}FEDOS`
      //   },
      // })
      // customPlugin(),
    ],
  }
})


