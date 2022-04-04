input.onButtonPressed(Button.A, function () {
    Hand = randint(1, 5)
    if (Hand == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
        Hand = _1
        music.playMelody("G G F F E D C C ", 450)
    } else if (Hand == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            `)
        Hand = _2
        music.playMelody("C D E F G A B C5 ", 550)
    } else if (Hand == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        Hand = _3
        music.playMelody("G B A B G A B C5 ", 600)
    } else if (Hand == 4) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        Hand = _4
        music.playMelody("C C E F G A C5 C5 ", 600)
    } else {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        Hand = _5
        music.playMelody("E G F A G A B C5 ", 600)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Old Sounds")
    OPS = 0
    if (OPS == 0) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        music.playMelody("C5 B G G E E C C ", 600)
        OPS = 1
        if (OPS == 1) {
            basic.showLeds(`
                . # # . .
                . . . # .
                . . # . .
                . # . . .
                . # # # .
                `)
            music.playMelody("C E D G F B A C5 ", 600)
            OPS = 3
        }
        if (OPS == 3) {
            basic.showLeds(`
                . # # . .
                . . . # .
                . # # . .
                . . . # .
                . # # . .
                `)
            music.playMelody("F A G B A B C5 C5 ", 600)
            OPS = 4
        }
        if (OPS == 4) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # # # .
                . . . # .
                . . . # .
                `)
            music.playMelody("D F E G B B C5 C5 ", 600)
            OPS = 5
        }
        if (OPS == 5) {
            basic.showLeds(`
                . . # # .
                . # . . .
                . . # . .
                . . . # .
                . # # . .
                `)
            music.playMelody("E F D G E B C5 C ", 600)
            OPS = 6
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        basic.showString("New Sounds")
        if (OPS == 6) {
            basic.showLeds(`
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
                `)
            music.playMelody("G G F F E D C C ", 450)
            OPS = 7
        }
        if (OPS == 7) {
            basic.showLeds(`
                . # # . .
                . . . # .
                . . # . .
                . # . . .
                . # # # .
                `)
            music.playMelody("C D E F G A B C5 ", 550)
            OPS = 8
        }
        if (OPS == 8) {
            basic.showLeds(`
                . # # . .
                . . . # .
                . # # . .
                . . . # .
                . # # . .
                `)
            music.playMelody("G B A B G A B C5 ", 600)
            OPS = 9
        }
        if (OPS == 9) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # # # .
                . . . # .
                . . . # .
                `)
            music.playMelody("C C E F G A C5 C5 ", 600)
            OPS = 10
        }
        if (OPS == 10) {
            basic.showLeds(`
                . . # # .
                . # . . .
                . . # . .
                . . . # .
                . # # . .
                `)
            music.playMelody("E G F A G A B C5 ", 600)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Hand == _1) {
        _1 = randint(6, 10)
        if (_1 == 6) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                `)
            music.playMelody("G G F F E D C C ", 450)
        } else if (_1 == 7) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . #
                # . . . #
                `)
            music.playMelody("C D E F G A B C5 ", 550)
        } else if (_1 == 8) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . #
                . . . . #
                # . . . #
                `)
            music.playMelody("G B A B G A B C5 ", 600)
        } else if (_1 == 9) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . . #
                . . . . #
                # . . . #
                `)
            music.playMelody("C C E F G A C5 C5 ", 600)
        } else {
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                # . . . #
                `)
            music.playMelody("E G F A G A B C5 ", 600)
        }
    }
    if (Hand == _2) {
        _2 = randint(11, 15)
        if (_2 == 11) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                # . . . #
                `)
            music.playMelody("G G F F E D C C ", 450)
        } else if (_2 == 12) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                # . . . #
                `)
            music.playMelody("C D E F G A B C5 ", 550)
        } else if (_2 == 13) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . #
                # . . . #
                # . . . #
                `)
            music.playMelody("G B A B G A B C5 ", 600)
        } else if (_2 == 14) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . . #
                # . . . #
                # . . . #
                `)
            music.playMelody("C C E F G A C5 C5 ", 600)
        } else {
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                # . . . #
                # . . . #
                `)
            music.playMelody("E G F A G A B C5 ", 600)
        }
    }
    if (Hand == _3) {
        _3 = randint(16, 20)
        if (_3 == 16) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                # . . . #
                `)
            music.playMelody("G G F F E D C C ", 450)
        } else if (_3 == 17) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . . . #
                # . . . #
                `)
            music.playMelody("C D E F G A B C5 ", 550)
        } else if (_3 == 18) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                # . . . #
                # . . . #
                `)
            music.playMelody("G B A B G A B C5 ", 600)
        } else if (_3 == 19) {
            basic.showLeds(`
                . . . . .
                . . . . #
                # . . . #
                # . . . #
                # . . . #
                `)
            music.playMelody("C C E F G A C5 C5 ", 600)
        } else {
            basic.showLeds(`
                . . . . #
                . . . . #
                # . . . #
                # . . . #
                # . . . #
                `)
            music.playMelody("E G F A G A B C5 ", 600)
        }
    }
    if (Hand == _4) {
        _4 = randint(21, 25)
        if (_4 == 21) {
            basic.showLeds(`
                . . . . .
                # . . . .
                # . . . .
                # . . . .
                # . . . #
                `)
            music.playMelody("G G F F E D C C ", 450)
        } else if (_4 == 22) {
            basic.showLeds(`
                . . . . .
                # . . . .
                # . . . .
                # . . . #
                # . . . #
                `)
            music.playMelody("C D E F G A B C5 ", 550)
        } else if (_4 == 23) {
            basic.showLeds(`
                . . . . .
                # . . . .
                # . . . #
                # . . . #
                # . . . #
                `)
            music.playMelody("G B A B G A B C5 ", 600)
        } else if (_4 == 24) {
            basic.showLeds(`
                . . . . .
                # . . . #
                # . . . #
                # . . . #
                # . . . #
                `)
            music.playMelody("C C E F G A C5 C5 ", 600)
        } else {
            basic.showLeds(`
                . . . . #
                # . . . #
                # . . . #
                # . . . #
                # . . . #
                `)
            music.playMelody("E G F A G A B C5 ", 600)
        }
    }
    if (Hand == _5) {
        _5 = randint(26, 30)
        if (_5 == 26) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # . . . #
                `)
            music.playMelody("G G F F E D C C ", 450)
        } else if (_5 == 27) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . #
                # . . . #
                `)
            music.playMelody("C D E F G A B C5 ", 550)
        } else if (_5 == 28) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . #
                # . . . #
                # . . . #
                `)
            music.playMelody("G B A B G A B C5 ", 600)
        } else if (_5 == 29) {
            basic.showLeds(`
                # . . . .
                # . . . #
                # . . . #
                # . . . #
                # . . . #
                `)
            music.playMelody("C C E F G A C5 C5 ", 600)
        } else {
            basic.showLeds(`
                # . . . #
                # . . . #
                # . . . #
                # . . . #
                # . . . #
                `)
            music.playMelody("E G F A G A B C5 ", 600)
        }
    }
})
let OPS = 0
let _5 = 0
let _4 = 0
let _3 = 0
let _2 = 0
let _1 = 0
let Hand = 0
music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # # .
        . # . . .
        . . # . .
        . . . # .
        . # # . .
        `)
    basic.showLeds(`
        . . # # .
        . # . . .
        . . # . .
        . . . # .
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # # #
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . . . # .
        . . # # .
        . # # # #
        . . # # .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # # . . .
        # # # # #
        # # . . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # # .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        # # . . .
        # # # . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        . # . . .
        . # # . .
        # # # # .
        . # # . .
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        . . . # #
        # # # # #
        . . . # #
        . . . # .
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . # # # #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
