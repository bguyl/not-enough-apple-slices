import 'phaser'
import { BootScene } from './scenes/BootScene'
import { GameScene } from './scenes/GameScene'
import { MainMenuScene } from './scenes/MainMenuScene'
import { ScoreScene } from './scenes/ScoreScene'

const neasConfig = {
  height: 0,
  input: {
    gamepad: true,
    mouse: true,
    touch: true
  },
  parent: 'game',
  scene: [BootScene, MainMenuScene, GameScene, ScoreScene],
  title: 'Not enough apple slices',
  type: Phaser.AUTO,
  width: 0
}

export class NotEnoughAppleSlices extends Phaser.Game {

  public game: Phaser.Game

  constructor() {
    neasConfig.height = (window.innerHeight < 0) ? window.innerHeight : screen.height
    neasConfig.width = neasConfig.height * 0.75
    super(neasConfig)
  }
}
