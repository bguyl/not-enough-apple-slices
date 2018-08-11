import * as back from '../assets/images/back.png'
import * as background from '../assets/images/background.jpg'
import * as button from '../assets/images/button.png'
import * as pince from '../assets/images/pince.png'
import * as plate from '../assets/images/plate.png'
import * as slice from '../assets/images/slice.png'

export class BootScene extends Phaser.Scene {

  constructor() {
    super({ key: 'BootScene' })
  }

  public preload(): void {
    this.load.image('back', back)
    this.load.image('background', background)
    this.load.image('button', button)
    this.load.image('pince', pince)
    this.load.image('plate', plate)
    this.load.image('slice', slice)
  }

  public update(): void {
    // this.scene.start('MainMenuScene')
    this.scene.start('MainMenuScene')
  }
}
