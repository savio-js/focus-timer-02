import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  console.log('toggle running')
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countDown()

  sounds.buttonPressAudio.play()
}

export function set() {
  console.log('set')
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()

}

export function reset() {
  console.log('reset')
  document.documentElement.classList.remove('running')
  /* Volta para o estado inicial */

  timer.updateDisplay()
  sounds.buttonPressAudio.play()

  state.isRunning = false

}

/* funcao para aumentar 5 minutos no countdown */

export function add() {
  console.log('add')

  if (state.minutes >= 60) {
    return
  }
  state.minutes += 5
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

/* funcao para diminuir 5 minutos no countdown */

export function subtract() {
  console.log('subtract')
  if (state.minutes <= 0) {
    return
  }
  state.minutes -= 5
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function toggleMusic() {

  state.isMute = document.documentElement.classList.toggle('music-on')

  if (state.isMute) {
    sounds.bgAudioForest.play()
    return
  }
  sounds.bgAudioForest.pause()
}
 