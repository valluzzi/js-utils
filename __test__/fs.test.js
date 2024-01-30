

const fs = require("../src/lib/filesystem.js")


test("normpath", () => {
    expect(fs.normpath("c:\\hello.txt")).toBe("c:/hello.txt")
    expect(fs.normpath("c:\\hello/world.txt")).toBe("c:/hello/world.txt")
    expect(fs.normpath("https://hello.txt")).toBe("https://hello.txt")
    expect(fs.normpath("https:\\hello.txt")).toBe("https://hello.txt")
});

test("juststem", () => {
    expect(fs.juststem("c:\\hello.txt")).toBe("hello")
    expect(fs.juststem("c:\\hello/world.txt")).toBe("world")
    expect(fs.juststem("https://hello.txt")).toBe("hello")
    expect(fs.juststem("https:\\hello.txt")).toBe("hello")
});

test("justfname", () => {
    expect(fs.justfname("c:\\hello.txt")).toBe("hello.txt")
    expect(fs.justfname("c:\\hello/world.txt")).toBe("world.txt")
    expect(fs.justfname("https://hello.txt")).toBe("hello.txt")
    expect(fs.justfname("https:\\hello.txt")).toBe("hello.txt")
});

test("justpath", () => {
    expect(fs.justpath("c:\\hello.txt")).toBe("c:")
    expect(fs.justpath("c:\\hello/world.txt")).toBe("c:/hello")
});

test("justext", () => {
    expect(fs.justext("c:\\hello.txt")).toBe("txt")
    expect(fs.justext("c:\\hello/world.txt")).toBe("txt")
    expect(fs.justext("https://hello.txt")).toBe("txt")
    expect(fs.justext("https:\\hello.txt")).toBe("txt")
});

test("justdomain", () => {
    expect(fs.justdomain("https://hello.com/hello.txt")).toBe("https://hello.com/")
});


test("forceext", () => {
    expect(fs.forceext("c:\\hello.txt","jpg")).toBe("c:\\hello.jpg")
    expect(fs.forceext("c:\\hello/world.txt","jpg")).toBe("c:\\hello/world.jpg")
    expect(fs.forceext("https://hello.txt","jpg")).toBe("https://hello.jpg")
    expect(fs.forceext("https:\\hello.txt","jpg")).toBe("https:\\hello.jpg")
});


