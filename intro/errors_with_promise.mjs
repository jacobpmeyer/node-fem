import { readFile } from 'fs/promises'

try {
  const res = await readFile(new URL('app.mj', import.meta.url), { encoding: 'utf8' })
} catch(e) {
  // Throws the error and haults execution
  // throw e

  // allows the program to continue
  console.error(e)
}

const otherRes = readFile(new URL('app.mj', import.meta.url), { encoding: 'utf8' })
  .catch(e => {
    console.log("this is the async error")
    console.error(e)
  })

console.log("EOF")
