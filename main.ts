// Decrement radio group by 1
input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
    radio.sendValue("enemy", 1)
})
// Increment radio group by 1
input.onButtonPressed(Button.AB, function () {
    bullet = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
    radio.sendValue("spawn", player.get(LedSpriteProperty.X))
    for (let index = 0; index < 4; index++) {
        bullet.change(LedSpriteProperty.Y, -1)
        radio.sendValue("move", 1)
        basic.pause(200)
    }
    bullet.delete()
})
// Increment radio group by 1
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
    radio.sendValue("enemy", -1)
})
radio.onReceivedValue(function (name, value) {
    if (name == "enemy") {
        enemy.change(LedSpriteProperty.X, value)
    } else if (name == "spawn") {
        enemy_bullet = game.createSprite(enemy.get(LedSpriteProperty.X), enemy.get(LedSpriteProperty.Y))
    } else if (name == "move") {
        enemy_bullet.change(LedSpriteProperty.Y, value)
    }
})
let enemy_bullet: game.LedSprite = null
let bullet: game.LedSprite = null
let enemy: game.LedSprite = null
let player: game.LedSprite = null
radio.setGroup(128)
player = game.createSprite(2, 4)
enemy = game.createSprite(2, 0)
