import { useState, useEffect } from 'react'
import {
  validateInputNameValue,
  validateInputTelValue,
  validateInputEmailValue
} from '../../../../utils/helpers'

const Form = ({
  parentClassName,
  setOrder,
  isFormReset,
  inputNameValue,
  inputTelValue,
  inputEmailValue,
  connectionValue,
  setInputNameValue,
  setInputTelValue,
  setInputEmailValue,
  setConnectionValue
}) => {

  const [isPolicyChecked, setIsPolicyChecked] = useState(true)
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)

  const inputNameClassName = inputNameValue.length
    ? `${parentClassName}__input ${validateInputNameValue(inputNameValue)
      ? 'success'
      : 'error'
    }`
    : `${parentClassName}__input`
  
  const inputTelClassName = inputTelValue.length
    ? `${parentClassName}__input ${validateInputTelValue(inputTelValue)
      ? 'success'
      : 'error'
    }`
    : `${parentClassName}__input`
  
  const inputEmailClassName = inputEmailValue.length
    ? `${parentClassName}__input ${validateInputEmailValue(inputEmailValue)
      ? 'success'
      : 'error'
    }`
    : `${parentClassName}__input`
  
  const connectionClassName = connectionValue.length
    ? `${parentClassName}__select success`
    : `${parentClassName}__select`

  const policyClassName = isPolicyChecked
    ? `${parentClassName}__policy success`
    : `${parentClassName}__policy error`
  
  useEffect(() => {
    if (validateInputNameValue(inputNameValue)
      && validateInputTelValue(inputTelValue)
      && validateInputEmailValue(inputEmailValue)
      && connectionValue
      && isPolicyChecked) {
      setIsSubmitDisabled(false)
    } else {
      setIsSubmitDisabled(true)
    }
  }, [
    inputNameValue,
    inputTelValue,
    inputEmailValue,
    connectionValue,
    isPolicyChecked
  ])

  useEffect(() => {
    if (isFormReset) {
      setInputNameValue('')
      setInputTelValue('')
      setInputEmailValue('')
      setConnectionValue('')
    }
  }, [isFormReset])
  
  const handleFormSubmit = (event) => {
    event.preventDefault()

    const order = {
      type: 'order',
      date: new Date().toLocaleString(),
      name: inputNameValue,
      tel: inputTelValue,
      email: inputEmailValue,
      conection: connectionValue,
      policy: isPolicyChecked
    }

    setOrder(order)
    setIsSubmitDisabled(true)
  }
  
  return (
    <form
      className={`${parentClassName}__form`}
      onSubmit={handleFormSubmit}
    >

      <input
        className={inputNameClassName}
        type='text'
        placeholder='Name'
        onChange={(event) => setInputNameValue(event.target.value)} 
        value={inputNameValue}
      />

      <input
        className={inputTelClassName}
        type='tel'
        placeholder='+375'
        onChange={(event) => setInputTelValue(event.target.value)}
        value={inputTelValue}
      />

      <input
        className={inputEmailClassName}
        type='email'
        placeholder='E-mail'
        onChange={(event) => setInputEmailValue(event.target.value)}
        value={inputEmailValue}
      />

      <label
        className={connectionClassName}
      >
        <span>Connection</span>
        <select
          value={connectionValue}
          onChange={(event) => setConnectionValue(event.target.value)}
        >
          <option></option>
          <option value='phone'>Phone</option>
          <option value='telegram'>Telegram</option>
          <option value='whatsapp'>WhatsApp</option>
          <option value='viber'>Viber</option>
          <option value='email'>Email</option>
        </select>
      </label>

      <label className={policyClassName}>
        <input
          type='checkbox'
          checked={isPolicyChecked}
          onChange={() => setIsPolicyChecked(!isPolicyChecked)}
        />
        <a href='https://google.com' target='_blank'>Privacy policy</a>
      </label>

      <button
        className={parentClassName + '__btn'}
        type='submit'
        disabled={isSubmitDisabled ? true : false}
      >
        Submit
      </button>
    </form>
  )
}

export default Form