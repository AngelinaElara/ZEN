const Title = ({title, className: name}) => {
  if (!Object.keys(title).length) return ''

  const {content, priority} = title

  const className = name
    ? name + '__title'
    : 'title'

  switch (priority) {
    case 1:
      return <h1 className={className}>{content}</h1>
    case 2:
      return <h2 className={className}>{content}</h2>
    case 3:
      return <h3 className={className}>{content}</h3>
    case 4:
      return <h4 className={className}>{content}</h4>
    case 5:
      return <h5 className={className}>{content}</h5>
    case 6:
      return <h6 className={className}>{content}</h6>
  }
}

export default Title