export class GameScene extends Phaser.Scene {
  public static score: number
  private bg: Phaser.GameObjects.Image
  private plate: Phaser.GameObjects.Image
  private pince: Phaser.GameObjects.Image
  private touchListener: Phaser.GameObjects.Zone
  private backBtn: Phaser.GameObjects.Image
  private slices: Phaser.GameObjects.Image[] = []
  private scoreTxt: Phaser.GameObjects.Text
  private currentRot: number
  private modifRot: number
  private incrRot: number
  private rangeRot: number
  private scoreMax: number
  private sliceOrigin: number
  private sliceSpace: number

  constructor() {
    super({ key: 'GameScene' })
  }

  public create(): void {
    this.currentRot = 0
    this.modifRot = 0
    this.incrRot = 0.03
    // this.incrRot = 0
    this.rangeRot = 0.61
    GameScene.score = 0
    this.sliceSpace = 0.2
    // tslint:disable-next-line:max-line-length
    this.scoreMax = Math.floor((2 * Math.PI) / 0.2) + Math.floor((2 * Math.PI) / 0.4) + Math.floor((2 * Math.PI) / 0.8) + 3
    this.sliceOrigin = 2

    // Background
    this.bg = this.add.image(0, 0, 'background')
    this.bg.scaleX = 6
    this.bg.scaleY = 6
    this.bg.setZ(-5)

    // Apple pie plate
    this.plate = this.add.image(420, 470, 'plate')
    this.plate.scaleX = 1.8
    this.plate.scaleY = 1.8

    // Game pointer
    this.pince = this.add.image(420, 470, 'pince')
    this.pince.scaleX = 1.5
    this.pince.scaleY = 1.5
    this.pince.setZ(1)
    this.pince.setOrigin(1.3, 1.3)
    this.pince.setDepth(1000)

    // Score
    this.scoreTxt = this.add.text(650, 10, `Score: ? / ${this.scoreMax}`,
      { fontFamily: 'Arial Black', fontSize: 18, color: '#ffffff' }
    )

    // Touch listener
    this.touchListener = this.add.zone(0, 0, 1920, 1920)
    this.touchListener.setInteractive()
    this.touchListener.setZ(2)
    this.touchListener.on('pointerdown', () => {
      this.currentRot += this.modifRot
      this.modifRot = 0
      const currentSlice = this.add.image(this.pince.x, this.pince.y, 'slice')
      currentSlice.scaleX = 0.23
      currentSlice.scaleY = 0.23
      currentSlice.setOrigin(this.sliceOrigin, this.sliceOrigin)
      currentSlice.setZ(0)
      currentSlice.setRotation(this.currentRot)
      this.currentRot += this.sliceSpace
      GameScene.score ++
      if (this.currentRot >= 4 * Math.PI) {
        this.scoreMax = GameScene.score + Math.floor((6 * Math.PI - this.currentRot) / 0.8) + 1
      } else if (this.currentRot >= 2 * Math.PI) {
        // tslint:disable-next-line:max-line-length
        this.scoreMax = GameScene.score + Math.floor((4 * Math.PI - this.currentRot) / 0.4) + Math.floor((2 * Math.PI) / 0.8) + 2
      } else {
        // tslint:disable-next-line:max-line-length
        this.scoreMax = GameScene.score + Math.floor((2 * Math.PI - this.currentRot) / 0.2) + Math.floor((2 * Math.PI) / 0.4) + Math.floor((2 * Math.PI) / 0.8) + 3
      }
      this.scoreTxt.setText(`Score: ? / ${this.scoreMax}`)
      this.slices.push(currentSlice)
    })

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

  public update(): void {
    if (this.modifRot > this.rangeRot || this.modifRot < 0) {
      this.incrRot *= -1
    }
    if (this.currentRot + this.incrRot > 6 * Math.PI) {
      this.scene.start('ScoreScene')
    }
    if (this.currentRot + this.incrRot >= 4 * Math.PI) {
      this.pince.setOrigin(0.8)
      this.sliceOrigin = 1
      this.sliceSpace = 0.8
    } else if (this.currentRot + this.incrRot >= 2 * Math.PI) {
      this.pince.setOrigin(1)
      this.sliceOrigin = 1.5
      this.sliceSpace = 0.4
    }
    this.modifRot += this.incrRot
    this.pince.setRotation(this.currentRot + this.modifRot)
  }
}
