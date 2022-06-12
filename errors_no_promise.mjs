import { readFile } from 'fs'

const file = readFile(new URL('app.mj', import.meta.url), (err, data) => {
  if (err) {
    throw err
  } else {
    console.log("yay no error")
  }
})

console.log("EOF")
