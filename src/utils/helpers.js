export const scrollToSection = (targetName) => {
  const $header = document.querySelector(`[data-name="header"]`)
  const $section = document.querySelector(`[data-name=${targetName}]`)

  if ((!$header && !$section) || ($header && !$section)) return

  const headerHeigth = $header.getBoundingClientRect().height

  const sectionTopPosition = $section.getBoundingClientRect().top
  const clientPosition = window.pageYOffset
  const targetPosition = clientPosition + sectionTopPosition - headerHeigth

  let currentTopPosition = clientPosition

  const scrollToTop = () => {
    if (currentTopPosition > targetPosition) {
      window.scrollTo(0, currentTopPosition)
      currentTopPosition -= 100
      setTimeout(scrollToTop, 20)
    } else {
      window.scrollTo(0, targetPosition)
    }
  }

  const scrollToBottom = () => {
    if (currentTopPosition < targetPosition) {
      window.scrollTo(0, currentTopPosition)
      currentTopPosition += 100
      setTimeout(scrollToBottom, 20)
    } else {
      window.scrollTo(0, targetPosition)
    }
  }

  if (clientPosition > targetPosition) {
    scrollToTop()
  }

  if (clientPosition < targetPosition) {
    scrollToBottom()
  }
}

export const scrollToTop = () => {
  const clientTopPosition = window.pageYOffset
  let currentTopPosition = clientTopPosition

  const scroll = () => {
    if (currentTopPosition > 0) {
      window.scrollTo(0, currentTopPosition)
      currentTopPosition -= 100
      setTimeout(scroll, 20)
    } else {
      window.scrollTo(0, 0)
    }
  }

  scroll()
}

export const showProgress2 = () => {
  const windowScroll = document.documentElement.scrollTop
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
 

  const $progress = document.querySelector('[data-name="progress"]')
  $progress.style = `width: ${(windowScroll/windowHeight)*100}%;`
}

export const showProgress = () => {
  // Объект данных: 
  const clientRect = document.body.getBoundingClientRect()
  
  // Высота, сколько прокручено:
  const clientPassed = Math.abs(clientRect.top)

  // Высота всего документа:
  const clientHeigth = document.body.clientHeight

  // Высота экрана (viewport):
  const screenHeigth = window.screen.height

  // Высота, сколько не прокручено:
  const clientNotPassed = clientHeigth - screenHeigth

  // Процент прокрученной области:
  const percent = Math.floor(clientPassed / clientNotPassed * 100)

  const $progress = document.querySelector('#progress')
  $progress.style.width = `${percent}%`
}

export const validateInputNameValue = (value) => {
  if (!value.length) return false

  return value.length >= 3
    && value.search(/[^a-z]+/gi) === -1 
    ? true
    : false
}

export const validateInputTelValue = (value) => {
  if (!value.length) return false

  return value.length === 9
    && value.search(/(^25|29|33)*[^0-9]+/gm) === -1
    ? true
    : false
}

export const validateInputEmailValue = (value) => {
  if (!value.length) return false

  return value.search(/[a-z0-9]*@[a-z]*\.(com|ru)/gi) !== -1
    ? true
    : false
}

export const validateCheckbox = (value) => {
  return value.checked ? true : false
}