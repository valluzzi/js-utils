const http = require("../src/lib/http.js")

test("fetchText", async () => {
    const text = await http.fetchText("https://raw.githubusercontent.com/valluzzi/js-utils/main/README.md")   
    expect(text).toBeDefined()
    expect(text).not.toBeNull()
    expect(text.startsWith("# js-utils")).toBe(true)
})

test("fetchJSON", async () => {
    const json = await http.fetchJSON("https://raw.githubusercontent.com/valluzzi/js-utils/main/__test__/test.json?x=1")   
    expect(json).toBeDefined()
    console.log(json)
    expect(json.name).toBe("hello")
    expect(json.value).toBe(20)
    expect(json.boolean).toBe(true)
})