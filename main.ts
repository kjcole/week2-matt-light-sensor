let level = 0
basic.forever(function () {
    level = input.lightLevel()
    serial.writeValue("light level", input.lightLevel())
    serial.writeLine("")
})
