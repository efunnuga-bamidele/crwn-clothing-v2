import { useState } from 'react';

//firebase
import { 
    signAuthUserInWithEmailAndPassword, 
    signInWithGooglePopup 
} from '../../utils/firebase/firebase.utils';
 
//components
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

//context 
// import { UserContext } from '../../context/user.context';

// styles
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formField, setFormField] = useState(defaultFormFields);
    const { email, password } = formField;

    //destructuring the function from the context
    // const { setCurrentUser } = useContext(UserContext);

    // console.log(formField)

    const resetFields = () => {
        setFormField(defaultFormFields);
    }

    const handleChange = (event) => {
            const { name, value } = event.target;
            setFormField({ ...formField, [name]: value })
    }

    const logGooglePopupUser = async () => {
        const { user } = await signInWithGooglePopup();
        // setCurrentUser(user);
        console.log(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signAuthUserInWithEmailAndPassword(formField.email, formField.password);
            //set the context
            // setCurrentUser(user);
            resetFields();
            console.log(user)
        }catch (error){
                switch (error.code){
                    case "auth/user-not-found":
                        alert("User detail was not found");
                        
                        break;
                    case "auth/wrong-password":
                        alert("Incorrect password for email");
                        break;
                    default:
                        console.log(error.message);
                }
        }
    } 

    return(
        <div className='sign-in-container'>
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="email"
                    type="email"
                    required
                    name ="email"
                    value={email}
                    onChange={handleChange}
                />
                <FormInput 
                    label="password"
                    type="password"
                    required
                    name ="password"
                    value={password}
                    onChange={handleChange}
                />
                <div className="buttons-container">
                    <Button type="submit">
                        Sign In
                    </Button>
                    <Button buttonType="google" type="button" onClick={logGooglePopupUser}>
                        Google Sign-In
                    </Button> 
                </div>
            </form>
            
        </div>
    )

}

export default SignInForm;