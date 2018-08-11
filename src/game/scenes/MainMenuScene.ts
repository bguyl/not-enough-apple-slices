export class MainMenuScene extends Phaser.Scene {
  private bg: Phaser.GameObjects.Image
  private btnPlay: Phaser.GameObjects.Image

  constructor() {
    super({ key: 'MainMenuScene' })
  }

  public create(): void {
    // Background
    this.bg = this.add.image(0, 0, 'background')
    this.bg.scaleX = 6
    this.bg.scaleY = 6
    this.bg.setZ(-5)

    // Button play
    this.btnPlay = this.add.image(425, 400, 'button')
    this.btnPlay.scaleX = 0.3
    this.btnPlay.scaleY = 0.3
    this.btnPlay.setInteractive()
    this.btnPlay.on('pointerdown', () => {
      this.scene.start('GameScene')
    })
    this.add.text(390, 380, 'Play', { fontFamily: 'Arial Black', fontSize: 32, color: '#ffffff' })

  }
}
