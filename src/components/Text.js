const Text = ({text, className: name}) => {

  const className = name ? name + '__copy' : 'copy'

  return (
    <p className={className}>{text}</p>
  )
}

export default Text