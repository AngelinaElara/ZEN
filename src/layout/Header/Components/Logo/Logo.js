import {ReactComponent as ZenIcon} from './ui/zen-logo.svg'

const Logo = ({
  className,
  onLogoClick
}) => {

  return (
    <button
      className={className}
      onClick={onLogoClick}
    >
      <ZenIcon />
    </button>
  )
}

export default Logo