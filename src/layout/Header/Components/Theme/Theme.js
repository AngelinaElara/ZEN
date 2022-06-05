import {ReactComponent as MoonIcon} from './ui/moon.svg'
import {ReactComponent as SunIcon} from './ui/sun.svg'
import './Theme.scss'

const Theme = ({
  className,
  isLigthTheme,
  onThemeClick
}) => {

  return (
    <button
      className={className}
      onClick={onThemeClick}
    >
      {isLigthTheme ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}

export default Theme