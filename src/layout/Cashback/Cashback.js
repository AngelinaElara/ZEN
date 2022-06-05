import Title from '../../components/Title'
import Text from '../../components/Text'
import './Cashback.scss'

const Cashback = ({
  data,
  onOrderClick
}) => {

  const {name, title, texts, buttonText} = data

  const className = name

  return (
    <section data-name={name} className={className}>
      <div className='container'>
        <div className={`${className}__wrapper`}>
          <div className={`${className}__body`}>
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

            <button
              className={`${className}__btn`}
              data-btn='order'
              id='order-btn'
              onClick={onOrderClick}
            >
              {buttonText && buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cashback