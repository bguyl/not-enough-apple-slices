import * as KGALittleSwag from './game/assets/fonts/KGALittleSwag.ttf'
import { NotEnoughAppleSlices } from './game/NotEnoughAppleSlices'

window.onload = () => {
  // tslint:disable-next-line:no-unused-expression
  new NotEnoughAppleSlices()
}

document.querySelector('body').style.margin = '0'
document.querySelector('body').style.textAlign = 'center'
document.querySelector('body').style.backgroundColor = 'wheat'
document.createElement('style').innerHTML = `@font-face { font-family: Party; src: url(${KGALittleSwag}); }`
