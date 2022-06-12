// if you don't ues the sync version of an fs function, then it will be done asynchronously
// Basically the async version of an fs function is preferred
import { readFile, writeFile } from 'fs/promises';

// console.log(fs)

// passing in the file path and incoding the return value as utf-8
let template = await readFile(new URL('./template.html', import.meta.url), { encoding: 'utf8' })

const data = {
  title: "Title for Learn Node.js",
  body: "This is the body of the html"
}

for (const [k, v] of Object.entries(data)) {
  template = template.replace(`{${k}}`, v)
}

await writeFile(new URL('./index.html', import.meta.url), template, { encoding: 'utf8' })

// What is the difference between this import and the one at the top?
// Are they different or the same object being accessed in a different way?
// console.log(import.meta)
