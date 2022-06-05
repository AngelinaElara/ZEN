import {ReactComponent as Google} from './ui/google.svg'
import {ReactComponent as Apple} from './ui/apple.svg'
import './Link.scss'

const Link = ({link}) => {

  const {name, url} = link

  const className = 'link'

  const iconSvg = name === 'apple' ? <Apple /> : <Google />

  return (
    <a
      className={className}
      data-link={name}
      target='_blank'
      href={url}
    >
      {iconSvg}
    </a>
  )
}

export default Link