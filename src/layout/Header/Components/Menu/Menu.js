import MenuItem from './components/MenuItem'
import './Menu.scss'

const Menu = ({
  className,
  childClassName,
  items,
  isMenuActive,
  onMenuItemClick
}) => {

  return (
    <ul
      className={isMenuActive ? `${className} active` : className} 
    >
      {
        items?.length && items.map(item => (
          <MenuItem
            key={item.target}
            className={childClassName}
            item={item}
            onMenuItemClick={onMenuItemClick}
          />
        ))
      }
    </ul>
  )
}

export default Menu