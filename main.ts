enum RadioMessage {
    message1 = 49434
}
for (let index = 0; index <= 2; index++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(3 - index)
}
music.playTone(392, music.beat(BeatFraction.Double))
basic.showString("GO!")
basic.forever(function () {
	
})
