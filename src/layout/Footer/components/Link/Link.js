const Link = ({item}) => {

  const {content, url, source, type} = item 

  switch (type) {
    case 'text':
      return (
        <a
          href={url}
          data-link='link'
        > 
          <span>{content}</span>
        </a>
      )
    case 'image':
      return (
        <a
          href={url}
          data-link='image'
        >
          <img src={source} />
        </a>
      )
    case 'email': 
      return (
        <a
          href={'mailto:' + url}
          data-link='email'
        >
          <span>{content}</span>
        </a>
      )
  }
}

export default Link