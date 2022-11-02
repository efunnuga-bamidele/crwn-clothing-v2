import { useState } from "react";

//firebase
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

//components
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

//context
// import { UserContext } from "../../context/user.context";

//styles
import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    // const { setCurrentUser } = useContext(UserContext);
    // console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formFields.password !== formFields.confirmPassword){
            alert("Passwords not a match");
            return;
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(formFields.email, formFields.password);
            // setCurrentUser(user);
            await createUserDocumentFromAuth(user, { displayName }); 
            

            resetFormFields();
            
        }catch (err){
            if (err.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            }else{
                console.log('user creation encounted an error: ', err.message);
            }
        }

    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return(
        <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput 
                label="Display name"
                type="text" 
                required 
                name="displayName" 
                onChange={handleChange} 
                value={displayName}
            />

            <FormInput 
                label="Email"
                type="email" 
                required 
                name="email" 
                onChange={handleChange} 
                value={email}
            />

            <FormInput 
                label="Password"
                type="password" 
                required 
                name="password" 
                onChange={handleChange} 
                value={password}
            />

            <FormInput 
                label ="Confirm Password"
                type="password" 
                required 
                name="confirmPassword" 
                onChange={handleChange} 
                value={confirmPassword}
            />

            <Button 
                type="submit" 
            >
                Sign up
            </Button>
        </form>
        </div>
    )
}

export default SignUpForm;