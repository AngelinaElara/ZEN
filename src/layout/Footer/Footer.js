import Column from './components/Column/Column'
import Image from '../../components/Image'
import Text from '../../components/Text'
import './Footer.scss'

const Footer = ({data}) => {
  const {name, info, columns} = data 

  const className = name

  return (
    <footer className={className}>
      <div className='container'>
        <div className={`${className}__wrapper`}>
          <div className={`${className}__columns`}>
            {columns && columns.map((column, index) => (
              <Column
                key={index}
                column={column}
                className={className}
              />
            ))}
          </div>

          <div className={`${className}__info`}>
            {info.logo && (
              <Image
                image={info.logo}
                className={className}
              />
            )}

            {info.texts && info.texts.map((text, index) => (
              <Text
                key={index}
                text={text}
                className={className}
              />
            ))}

            {info.copyright &&
              <a
                className={`${className}__copyright`}
                href={info.copyright.url}
                target='_blank'
              >
                <Image image={info.copyright} />
              </a>
            }
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer