const cookies = require("../index")

describe("cookies", () => {
  describe("setCookie()", () => {
    it("set Cookie `Example_01` as Math.random()", () => {
      const EXAMPLE_01 = "Example_01"
      const VALUE = Math.random() * 66464

      cookies.deleteCookie(EXAMPLE_01)

      cookies.setCookie(EXAMPLE_01, VALUE)

      expect(cookies.readCookie(EXAMPLE_01)).toEqual(VALUE)
    })

    it("setCookie() with expiration date expired", () => {
      const date = new Date()
      const EXAMPLE_02 = "Example_02"

      cookies.setCookie(EXAMPLE_02, Math.random() * 98797, date)

      expect(cookies.readCookie(EXAMPLE_02)).toEqual(null)
    })

    it("setCookie() with expiration date NOT expired", () => {
      const date = new Date("2100-01-01")

      const VALUE = Math.random() * 66565

      cookies.setCookie("test", VALUE, date)

      expect(cookies.readCookie("test")).toEqual(VALUE)
    })
  })

  describe("deleteCookie()", () => {
    it("set cookie, read value and delete", () => {
      const COOKIE_NAME = Math.random() * 3333
      const COOKIE_VALUE = Math.random() * 1212

      cookies.setCookie(COOKIE_NAME, COOKIE_VALUE)

      expect(cookies.readCookie(COOKIE_NAME)).toEqual(COOKIE_VALUE)

      cookies.deleteCookie(COOKIE_NAME)

      expect(cookies.readCookie(COOKIE_NAME)).toBe(null)
    })
  })
})
