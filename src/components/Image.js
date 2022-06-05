const Image = ({image}) => {
  if (!Object.keys(image).length) return ''

  const {source, alternate} = image

  return (
    <img
      src={source}
      alt={alternate}
    >
    </img>
  )
}

export default Image