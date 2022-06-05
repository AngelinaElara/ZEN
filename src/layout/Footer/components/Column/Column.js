import Title from "../../../../components/Title"
import List from "../List/List"

const Column = ({
  column,
  className: name
}) => {

  const {links, title} = column

  const currentClassName = name
    ? `${name}__column`
    : 'column'

  const parentClassNameForChild = name
    ? name
    : currentClassName
  
  return (
    <div
      className={currentClassName}
      data-type='column'
    >
      {<Title
        title={title}
        className={parentClassNameForChild}
      />}
      
      {<List 
        links={links}
        className={parentClassNameForChild}
      />}
    </div>
  )
}

export default Column