import Client from './components/Client/Client'
import './Clients.scss'

const Clients = ({
  data,
  isLigthTheme
}) => {

  const {name, lightThemeImages: imagesLight, darkThemeImages: imagesDark} = data

  const className = name

  return (
    <section data-name={name} className={className}>
      <div className='container'>
        <div className={`${className}__body`}>
          <ul className={`${className}__list`}>
            {isLigthTheme
              ? imagesLight.map((image, index) => (
                <Client
                  key={index}
                  client={image}
                  className={className}
                />
              ))
              : imagesDark.map((image, index) => (
                <Client
                  key={index}
                  client={image}
                  className={className}
                />
              ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Clients