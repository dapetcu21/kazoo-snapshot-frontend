const rewire = require("rewire")
const Collect = rewire("./Collect")
const getText = Collect.__get__("getText")
// @ponicode
describe("getText", () => {
    test("0", () => {
        let callFunction = () => {
            getText("UPLOADING")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getText("DONE")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getText("IDLE")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getText("ERROR_TOO_MANY")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getText("Île-de-France")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getText(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
