import {useState, useEffect} from 'react'
import {API_BASE_URL} from './constans/api'
import Header from './layout/Header'
import Download from './layout/Download'
import Warranty from './layout/Warranty'
import Care from './layout/Care'
import Cashback from './layout/Cashback'
import Clients from './layout/CLients'
import Footer from './layout/Footer'
import Modal from './layout/Modal'
import {scrollToTop, scrollToSection, showProgress} from './utils/helpers'
import preloader from './assets/preloader.gif'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({})
  const [isLogoClicked, setIsLogoClicked] = useState(false)
  const [isLigthTheme, setIsLigthTheme] = useState(true)
  const [isBurgerActive, setIsBurgerActive] = useState(false)
  const [targetName, setTargetName] = useState('')
  const [isModalActive, setIsModalActive] = useState(false)

  useEffect(() => {
    fetch(API_BASE_URL)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
  }, [])

  useEffect(() => {
    if (Object.keys(data).length) {
      setTimeout(() => setIsLoading(false), 3000)
      document.onscroll = () => showProgress()
    }
  }, [data])

  useEffect(() => {
    if (isLogoClicked) {
      scrollToTop()
      setIsLogoClicked((prevValue) => !prevValue)
      setIsBurgerActive(false)
    }
  }, [isLogoClicked])

  useEffect(() => {
    if (!isLigthTheme) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isLigthTheme])

  useEffect(() => {
    isBurgerActive
      ? document.body.classList.add('hidden')
      : document.body.classList.remove('hidden')
  }, [isBurgerActive])

  useEffect(() => {
    if (targetName) {
      scrollToSection(targetName)
      setTargetName('')
    }
  }, [targetName])

  useEffect(() => {
    if (isModalActive) {
      document.body.classList.add('hiden')
    } else {
      setTimeout(() => {
        document.body.classList.remove('hiden')
      }, 200)
    }
  }, [isModalActive])

  const handleLogoClick = () => {
    if (!isLogoClicked) {
      setIsLogoClicked((prevValue) => !prevValue)
    }
  }

  const handleThemeClick = () => {
    setIsLigthTheme(prevValue => !prevValue)
  }

  const handleBurgerClick = () => {
    setIsBurgerActive(prevValue => !prevValue)
  }

  const handleMenuItemClick = (event) => {
    const targetName = event.target.dataset.target
    setTargetName(targetName)
    setIsBurgerActive(false) 
  }

  const handleOrderClick = () => {
    setIsModalActive(true)
  }

  return (
    <> 
      {isLoading && (
        <div className='preloader'>
          <img
            src={preloader}
            alt='Preloader'
          />
          <p>Loading...</p>
        </div>
      )}
      
      <div className='progress' id='progress'></div>

      {data?.header && (
        <Header
          className='header'
          data={data.header}
          isLigthTheme={isLigthTheme}
          isBurgerActive={isBurgerActive}
          onLogoClick={handleLogoClick}
          onThemeClick={handleThemeClick}
          onBurgerClick={handleBurgerClick}
          onMenuItemClick={handleMenuItemClick}
        />
      )}

      {data?.download && (
        <Download
          className='download'
          data={data.download}
        />
      )}
      
      {data?.warranty && (
        <Warranty
          className='warranty'
          data={data.warranty}
        />
      )}

      {data?.care && (
        <Care
          className='care'
          data={data.care}
        />
      )}

      {data?.cashback && (
        <Cashback
          className='cashback'
          data={data.cashback}
          onOrderClick={handleOrderClick}
        />
      )}

      {data?.clients && (
        <Clients
          className='clients'
          data={data.clients}
          isLigthTheme={isLigthTheme}
        />
      )}

      {data?.footer && (
        <Footer
          className='footer'
          data={data.footer}
        />
      )}

      {data?.cashback && (
        <Modal
          className='modal'
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
        />
      )}
    </>
  )
}

export default App
