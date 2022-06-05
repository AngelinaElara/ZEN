const MenuItem = ({
  className,
  item,
  onMenuItemClick
}) => {
 
  const {target, content} = item

  return (
    <li className={className}>
      <button
        data-target={target}
        onClick={onMenuItemClick}
      >
        {content}
      </button>
    </li>
  )
}

export default MenuItem