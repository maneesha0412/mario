scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
    game.setGameOverMessage(false, "GAME OVER!")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Super_Mario.vy == 0) {
        Super_Mario.vy = -150
    }
})
let Super_Mario: Sprite = null
scene.setBackgroundColor(9)
Super_Mario = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 2 2 . . . . . 
    . . . . . . . 2 2 2 2 2 . . . . 
    . . . . . . 2 2 2 d d . . . . . 
    . . . . . . f d f d f d . . . . 
    . . . . . . f d d d d d . . . . 
    . . . . . . . . d d f f . . . . 
    . . . . . . . . d d d d . . . . 
    . . . . . 2 2 8 2 2 8 2 2 . . . 
    . . . . 2 2 2 8 8 8 8 2 2 2 . . 
    . . . . 2 . 2 8 8 8 8 2 . 2 . . 
    . . . . 2 . 8 8 8 8 8 8 . 2 . . 
    . . . . 2 . 8 8 8 8 8 8 . 2 . . 
    . . . . 1 . 8 8 8 8 8 8 . 1 . . 
    . . . . . . 8 8 . . 8 8 . . . . 
    . . . . . . e e . . e e . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Super_Mario, 100, 0)
tiles.setCurrentTilemap(tilemap`level4`)
Super_Mario.ay = 300
scene.cameraFollowSprite(Super_Mario)
