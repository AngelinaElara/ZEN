import './scss/index.scss'
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from './App'

const $root = document.querySelector('#root')

const root = ReactDOMClient.createRoot($root)

root.render(<App />)