import {ReactComponent as Close} from './components/ui/close.svg'
import Form from './components/Form/Form'
import './Modal.scss'
import {useEffect, useState} from 'react'
import { API_BASE_URL } from '../../constans/api'

const Modal = ({
  className,
  isModalActive,
  setIsModalActive
}) => {
  const [order, setOrder] = useState({})
  const [successMessage, setSuccessMessage] = useState('')
  const [isFormReset, setIsFormReset] = useState(false)
  const [inputNameValue, setInputNameValue] = useState('')
  const [inputTelValue, setInputTelValue] = useState('')
  const [inputEmailValue, setInputEmailValue] = useState('')
  const [connectionValue, setConnectionValue] = useState('')

  useEffect(() => {
    if (Object.keys(order).length) {

      setSuccessMessage('Success!')
      setIsFormReset(true)
      setTimeout(() => {
        setIsModalActive(false)
        setSuccessMessage('Order a consultation')
      }, 2000);
    }
  }, [order])

  useEffect(() => {
    if (Object.keys(order).length) {

      fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
      })
        .then(response => response.json())
        .catch((error) => console.log(error))
    }
  }, [order])

  const handleModalCloseClick = () => {
    setIsModalActive(false)
    setInputNameValue('')
    setInputTelValue('')
    setInputEmailValue('')
    setConnectionValue('')
  }
  
  return (
    <div id='modal' className={isModalActive ? `${className} active` : className}>
      <div className={`${className}__body`}>
        <button
          className={`${className}__close`}
          onClick={handleModalCloseClick}
        >
          <Close />
        </button>

        <h2
          className={`${className}__title`} 
        >
          {successMessage ? successMessage : 'Order a consultation'}
        </h2>

        <Form
          parentClassName={className}
          setOrder={setOrder}
          isFormReset={isFormReset}
          inputNameValue={inputNameValue}
          inputTelValue={inputTelValue}
          inputEmailValue={inputEmailValue}
          connectionValue={connectionValue}
          setInputNameValue={setInputNameValue}
          setInputTelValue={setInputTelValue}
          setInputEmailValue={setInputEmailValue}
          setConnectionValue={setConnectionValue}
        />
      </div>
    </div>
  )
}

export default Modal