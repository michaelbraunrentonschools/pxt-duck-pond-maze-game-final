enum SpriteKindLegacy {
    Player,
    Food,
    Enemy,
    Projectile
}
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    for (let index = 0; index < 4; index++) {
        otherSprite.setPosition(Math.randomRange(32, 380), Math.randomRange(100, 380))
    }
    info.startCountdown(10)
})
let duck: Sprite = null
scene.setTileMap(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 8 7 7 7 7 8 8 8 7 7 7 7 7 7 4 
4 8 7 7 7 7 7 8 8 7 7 7 7 7 8 4 
4 8 7 7 7 7 7 7 7 7 7 7 8 7 8 4 
4 8 8 7 7 7 7 7 7 7 7 8 8 8 8 4 
4 7 8 8 7 7 7 7 7 7 7 8 8 8 8 4 
4 7 7 7 7 7 7 7 7 7 7 7 8 8 8 4 
4 7 7 7 7 7 7 7 7 7 7 7 8 8 8 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 8 7 4 
4 7 7 8 8 7 7 7 7 7 7 7 7 7 7 4 
4 7 8 8 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 8 8 7 7 7 7 7 4 
4 7 7 7 7 7 7 8 8 8 8 8 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 8 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
scene.setTile(8, img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 6 8 6 8 8 8 8 8 8 8 8 
8 8 8 8 6 8 8 6 8 8 8 8 8 8 8 8 
8 8 8 6 6 8 8 6 8 8 8 8 8 8 8 8 
8 8 6 8 8 8 6 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 6 8 8 6 8 8 6 8 8 8 
8 8 8 8 8 8 6 8 6 6 8 8 8 8 8 8 
8 8 8 8 8 6 8 8 8 8 8 6 6 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, true)
scene.setTile(4, img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 2 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 2 4 4 4 
4 4 4 2 4 4 4 4 2 4 4 2 4 4 4 4 
4 4 4 2 4 4 4 4 2 4 4 2 4 4 4 4 
4 4 4 2 4 4 4 4 2 4 4 2 4 4 4 4 
4 4 4 4 2 4 4 4 4 2 4 2 4 4 4 4 
4 4 4 4 2 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 2 4 4 4 4 4 2 4 4 4 4 4 
4 4 4 4 4 2 4 4 4 4 2 4 4 4 4 4 
4 4 4 4 4 2 2 4 4 4 4 2 4 4 4 4 
4 2 2 4 4 4 2 4 4 4 4 2 2 4 4 4 
4 4 2 2 4 4 4 4 4 4 4 4 2 4 4 4 
4 4 4 4 2 2 2 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 2 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, true)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 5 5 7 7 7 7 7 7 7 
7 7 7 7 7 7 5 5 5 5 5 7 7 7 7 7 
7 7 7 7 5 5 5 5 5 5 5 7 7 7 7 7 
7 7 7 7 7 5 5 5 4 4 5 5 7 7 7 7 
7 7 7 7 7 5 5 5 4 5 5 5 7 7 7 7 
7 7 7 7 7 7 5 5 5 5 5 5 7 7 7 7 
7 7 7 7 7 7 7 5 5 5 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, false)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 40; index++) {
    duck = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . . . . b c . . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 5 d f . . 
. . . . b 5 5 1 f f 5 d 4 c . . 
. . . . b 5 5 d f b d d 4 4 . . 
b d d d b b d 5 5 5 4 4 4 4 4 b 
b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
b d c 5 5 5 5 d 5 5 5 5 5 b . . 
c d d c d 5 5 b 5 5 5 5 5 5 b . 
c b d d c c b 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKindLegacy.Food)
    duck.setPosition(Math.randomRange(32, 380), Math.randomRange(100, 380))
    duck.z = 1
}
info.startCountdown(10)
