const str = require('../src/lib/strings.js');


test("listify", () => {
    expect(str.listify(1)).toEqual([1])
    expect(str.listify(1.0)).toEqual([1.0])
    expect(str.listify("1")).toEqual(["1"])
    expect(str.listify("1.0")).toEqual(["1.0"])
    expect(str.listify("1,0,0")).toEqual(["1", "0", "0"])
    expect(str.listify([1,2,3])).toEqual([1,2,3])

});

