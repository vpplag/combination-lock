input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    led.toggle(column, row)
    if (column < 4) {
        column += 1
    } else {
        column = 0
    }
    led.toggle(column, row)
    combination[row] = column
})
input.onButtonPressed(Button.B, function () {
    music.playTone(220, music.beat(BeatFraction.Eighth))
    if (row < 4) {
        row += 1
    } else {
        row = 0
    }
    column = combination[row]
})
let brightness = 0
let correct = 0
let combination: number[] = []
let row = 0
let column = 0
column = 0
row = 0
combination = [0, 0, 0, 0, 0]
let target = [2, 3, 1, 4, 1]
basic.forever(function () {
    correct = 0
    for (let index = 0; index <= 4; index++) {
        if (combination[index] == target[index]) {
            correct += 1
        }
    }
    if (correct == 5) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
basic.forever(function () {
    brightness = 4
    for (let index = 0; index <= 5; index++) {
        brightness += 50
        led.plotBrightness(column, row, brightness)
        basic.pause(100)
    }
})
