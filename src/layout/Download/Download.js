import Title from '../../components/Title'
import Text from '../../components/Text'
import Link from './components/Link/Link'
import Image from '../../components/Image'
import './Download.scss'

const Download = ({data}) => {

  const {name, title, texts, image, links} = data

  const className = name

  return (
    <section data-name='download' className={className}>
      <div className='container'>
        <div className={`${className}__wrapper`}>
          <div className={`${className}__body`}>

            {title &&
              <Title
                title={title}
                className={name}
              />
            }
            
            {texts && texts.map((text, index) => (
              <Text
                key={index}
                text={text}
                className={name}
              />
            ))}

            <div className={`${name}__links`}>
              {links && links.map((link, index) => (
                <Link
                  key={index}
                  link={link}
                />
              ))}
            </div>

          </div>

          <div className={`${name}__image`}>
            {image && <Image image={image} />}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Download