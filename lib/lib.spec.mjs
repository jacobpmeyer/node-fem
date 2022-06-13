import { myAdd } from './myLib.mjs'
import assert from 'assert'

console.log('add() should add two numbers')
try {
  const res = myAdd(1, 2)
  assert.equal(res, 3)
  console.log(res)
  console.log('success')
} catch (e) {
  console.log('FAIL')
  console.error(e)
}
