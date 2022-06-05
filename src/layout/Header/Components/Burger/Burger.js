const Burger = ({
  className,
  isBurgerActive,
  onBurgerClick
}) => {

  return (
    <button
      className={isBurgerActive ? `${className} active` : className}
      onClick={onBurgerClick} 
    >
      <span></span>
    </button>
  )
}

export default Burger