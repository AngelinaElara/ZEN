import Link from '../Link/Link'

const List = ({
  links,
  className: name
}) => {

  const className = name
    ? `${name}__list`
    : 'list'

  const childClassName = name
    ? `${name}__item`
    : `${className}__item`
  
  return (
    <ul className={className}>
      {links.map((item, index) =>
        <li
          key={index}
          className={childClassName}
        >
          {<Link item={item} />}
        </li>
      )}
    </ul>
  )
}

export default List