import './Header.scss'
import Logo from './Components/Logo/Logo'
import Menu from './Components/Menu/Menu'
import Theme from './Components/Theme/Theme'
import Burger from './Components/Burger/Burger'

const Header = ({
  className = 'header',
  data = {},
  isLigthTheme,
  isBurgerActive,
  onLogoClick,
  onThemeClick,
  onBurgerClick,
  onMenuItemClick
}) => {

  const {name, menuItems: items} = data

  return (
    <header
      data-name={name}
      className={isLigthTheme ? className : `${className} dark`}
    >
      <div className={`${className}__wrapper`}>
        <nav className={`${className}__nav`}>
          <Logo
            className={`${className}__logo`}
            onLogoClick={onLogoClick}
          />

          <Menu
            className={`${className}__menu`}
            childClassName={`${className}__item`}
            items={items}
            isMenuActive={isBurgerActive}
            onMenuItemClick={onMenuItemClick}
          />
        </nav>

        <Theme
          className={`${className}__theme`}
          isLigthTheme={isLigthTheme}
          onThemeClick={onThemeClick}
        />

        <Burger
          className={`${className}__burger`}
          isBurgerActive={isBurgerActive}
          onBurgerClick={onBurgerClick} 
        />
      </div>
    </header>
  )
}

export default Header
