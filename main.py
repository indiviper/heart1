def on_button_pressed_a():
    global j
    j = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_icon(IconNames.TSHIRT)
input.on_button_pressed(Button.B, on_button_pressed_b)

j = 0
basic.show_icon(IconNames.HEART)
while j < 100:
    j += 1
    if j == 10:
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            """)
        pause(1000)
    if j == 20:
        basic.show_leds("""
            . # # # .
            # . . . #
            . . . # .
            . # . . .
            # # # # #
            """)
        pause(1000)
    if j == 30:
        basic.show_leds("""
            . # # # .
            . . . . #
            . . # # .
            . . . . #
            . # # # .
            """)
        pause(1000)
    if j == 40:
        basic.show_leds("""
            . . # # .
            . # . # .
            # # # # .
            . . . # .
            . . . # .
            """)
        pause(1000)
    if j == 50:
        j = 0