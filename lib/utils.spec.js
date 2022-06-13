const { expect } = require('@jest/globals')
const { getNewUser, mapObjectToArray } = require('./utils.js')

describe("mapObjectToArray()", () => {
  test("maps values to array using callback", () => {
    const result = mapObjectToArray({name: "steve", occupation: "being cool"}, (k, v) => {
      return v + "!"
    })
    expect(result).toEqual(["steve!", "being cool!"])
  })

  test("callback gets called", () => {
    const mockCb = jest.fn()
    const result = mapObjectToArray({name: "steve", occupation: "being cool"}, mockCb)

    expect(mockCb.mock.calls.length).toBe(2)
  })
})

describe("getNewUser()", () => {
  test("it gets user", async () => {
    const user = await getNewUser(1)

    expect(user).toBeTruthy()
    expect(user.id).toBe(1)
  })

  test("no user found", async () => {
    expect.assertions(1)
    try {
      const user = await getNewUser(2)
    } catch (e) {
      expect(e).toBeTruthy()
    }
  })
})
