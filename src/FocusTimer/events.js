import * as actions from "./actions.js";
import * as el from "./elements.js";
import state from "./state.js";
import { updateDisplay } from "./timer.js";
import * as sounds from "./sounds.js"


export function registerControls() {

  el.controls.addEventListener('click', event => {
    const action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })
}

export function setSounding() {
  el.buttonSounds.forEach(button => {

    let buttons = button.getAttribute('data-action');

    button.addEventListener('click', () => {
      state.isMute = document.documentElement.classList.toggle('music-on')

      if (!state.isMute) {
        sounds.bgAudioForest.pause()
        sounds.bgAudioRain.pause()
        sounds.bgAudioCoffeeShop.pause()
        sounds.bgAudioFireplace.pause()
        
        button.classList.toggle('music')

        return
      }

      if (state.isMute && buttons === 'toggleMusic1') {
        button.classList.add('music')
        sounds.bgAudioForest.play()
        return
      }

      if (state.isMute && buttons === 'toggleMusic2') {
        button.classList.add('music')
        sounds.bgAudioRain.play()
        return
      }

      if (state.isMute && buttons === 'toggleMusic3') {
        button.classList.add('music')
        sounds.bgAudioCoffeeShop.play()
        return
      }

      if (state.isMute && buttons === 'toggleMusic4') {
        button.classList.add('music')
        sounds.bgAudioFireplace.play()
        return
      }
    })

  })
}


export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ""
  })
  el.minutes.onkeypress = event => /\d/.test(event.key)

  el.minutes.addEventListener('blur', () => {
    let time = event.currentTarget.textContent

    time = time > 60 ? 60 : time

    state.minutes = Number(time)
    state.seconds = 0

    console.log(typeof time)
    updateDisplay()
    el.minutes.removeAttribute('contenteditable')

  })
}