//styles
import './form-input.styles.scss'

//made use of a spread operator to duplicate input properties
const FormInput = ({ label, ...otherProps}) => {
    return(
        <div className="group">
        <input className='form-input' {...otherProps} />
            {label && (
                <label 
                    className={`${otherProps.value.length > 0 ? 'shrink' : ''} form-input-label`}
                >
                    {label}
                </label>
            )}
            
        </div>
    )
}

export default FormInput;