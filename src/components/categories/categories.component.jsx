
//styles
import './categories.styles.scss'
//Components
import CategoryItem from '../category-item/category-item.component';

const Categories = ({categories}) => {
   
    return(
        <div className='categories-container'>
            {categories.map(({ title, id, imageUrl}) => (
                <CategoryItem title={title} id={id} imageUrl={imageUrl} key={id} />
            ))}
      </div>
    )
} 

export default Categories;