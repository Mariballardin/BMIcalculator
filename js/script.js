import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { IMC, notANumber } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

// const modalWrapper = document.querySelector(".modal-wrapper")
// const modalMessage = document.querySelector(".modal .title span")
// const modalBtnClose = document.querySelector(".modal button.close")

/*const Modal = {
  open: function(){},
  close: function(){}
}
ou */

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

if(weightOrHeightIsNotANumber){
  AlertError.open()
  return;
}

  AlertError.close()

  const result = IMC(weight, height)
  displayResultMessage(result)
 
  
}

function displayResultMessage(result){
  const message = `Seu IMC é ${result}`

  Modal.message.innerText = message
  Modal.open()
}