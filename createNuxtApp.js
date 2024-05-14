/* eslint-disable no-console */

import { spawn } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import process from 'node:process'
import { Readable } from 'node:stream'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { format } from 'prettier'

// Get the current file's path
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Get the folder name from the command line arguments
const folderName = process.argv[process.argv.length - 1]

if (!folderName) {
  console.error('Error: Please provide a folder name')
  process.exit(1)
}

// Create a readable stream with "No" as input
const noStream = Readable.from('No\n')

// Run the command
const command = `cd apps/ && pnpm dlx nuxi@latest init ${folderName} --package-manager=pnpm`
const child = spawn(command, {
  shell: true,
  stdio: ['pipe', 'pipe', 'pipe'], // Redirect stdout, stderr, and stdin
})

// Pipe the "No" input stream to the child process stdin
noStream.pipe(child.stdin)

// Log stdout and stderr
child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`)
})

// Handle process exit
child.on('exit', async (code) => {
  if (code === 0) {
    console.log('Nuxt.js application setup completed successfully.')

    // Create components and pages folders
    const componentsDir = join(__dirname, 'apps', folderName, 'components')
    const pagesDir = join(__dirname, 'apps', folderName, 'pages')

    try {
      mkdirSync(componentsDir)
      mkdirSync(pagesDir)
      console.log('Components and Pages folders created successfully.')

      // Create index.vue file inside pages folder
      const indexVueContent = `
        <script setup lang="ts">
          import { defineProps } from 'vue';

          const props = defineProps<{
            modelValue?: boolean,
          }>();
        </script>

        <template>
          <div>
            <slot/>
          </div>
        </template>

        <style scoped>

        </style>
      `

      // Format the content using Prettier
      const formattedContent = await format(indexVueContent, { parser: 'vue' })

      const indexPath = join(pagesDir, 'index.vue')
      writeFileSync(indexPath, formattedContent)
      console.log(
        'index.vue file created successfully and formatted using Prettier.',
      )
    }
    catch (error) {
      console.error('Error creating folders and files:', error)
    }
  }
  else {
    console.error('Nuxt.js application setup failed.')
  }
})
