const Client = ({
  client,
  className: name
}) => {

  const {alternate, source} = client

  const className = name
    ? `${name}__item`
    : ''
  
  return (
    <li className={className}>
      <img
        data-image='client'
        src={source}
        alt={alternate}
      />
    </li>
  )
}

export default Client