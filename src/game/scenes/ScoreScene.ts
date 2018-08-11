import { GameScene } from './GameScene'

export class ScoreScene extends Phaser.Scene {
  private bg: Phaser.GameObjects.Image
  private scoreTxt: Phaser.GameObjects.Text
  private backBtn: Phaser.GameObjects.Image

  constructor() {
    super({ key: 'ScoreScene' })
  }

  public create(): void {
    // Background
    this.bg = this.add.image(0, 0, 'background')
    this.bg.scaleX = 6
    this.bg.scaleY = 6
    this.bg.setZ(-5)

    // Score
    this.add.text(300, 380, `Score: ${GameScene.score} / 56`,
      { fontFamily: 'Arial Black', fontSize: 32, color: '#ffffff' }
    )

    // Back button
    this.backBtn = this.add.image(50, 50, 'back')
    this.backBtn.setOrigin(0, 0)
    this.backBtn.scaleX = 0.3
    this.backBtn.scaleY = 0.3
    this.backBtn.setInteractive()
    this.backBtn.setZ(3)
    this.backBtn.on('pointerdown', () => {
      this.scene.start('MainMenuScene')
    })
  }
}
