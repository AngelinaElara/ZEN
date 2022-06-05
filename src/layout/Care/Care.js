import Title from '../../components/Title'
import Text from '../../components/Text'
import Image from '../../components/Image'
import './Care.scss'

const Care = ({data}) => {

  const {name, title, texts, image} = data

  const className = name

  return (
    <section data-name='care' className={className}>
      <div className='container'>
        <div className={`${className}__wrapper`}>
          <div className={`${className}_body`}>
            {title &&
              <Title
              title={title}
              className={className}
              />
            }

            {texts && texts.map((text, index) => (
              <Text
                key={index}
                text={text}
                className={className}
              />
            ))}
          </div>

          <div className={`${className}__image`}>
            {image && < Image image={image} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Care