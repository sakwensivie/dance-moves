input.onButtonPressed(Button.A, function on_button_pressed_a() {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
        `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
        `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
                        . # # # .
                        # . # . #
                        . . # . .
                        . . # . .
        `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
                        . # # # .
                        # . # . #
                        . . # . .
                        . . # . .
        `)
        basic.pause(100)
    }
})
