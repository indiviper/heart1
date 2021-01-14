input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    j = 0
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showIcon(IconNames.TShirt)
})
let j = 0
basic.showIcon(IconNames.Heart)
while (j < 100) {
    j += 1
    if (j == 10) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        pause(1000)
    }
    
    if (j == 20) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . . # .
            . # . . .
            # # # # #
            `)
        pause(1000)
    }
    
    if (j == 30) {
        basic.showLeds(`
            . # # # .
            . . . . #
            . . # # .
            . . . . #
            . # # # .
            `)
        pause(1000)
    }
    
    if (j == 40) {
        basic.showLeds(`
            . . # # .
            . # . # .
            # # # # .
            . . . # .
            . . . # .
            `)
        pause(1000)
    }
    
    if (j == 50) {
        j = 0
    }
    
}
