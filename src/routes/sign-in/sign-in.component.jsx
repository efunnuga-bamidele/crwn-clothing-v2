//Firebase imports
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

//Components
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";


const Signin = () => {

    const logGooglePopupUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user); 
    }

    return(
        <div>   
            <h1>Sign-In</h1>
            <Button buttonType="google" type="submit" onClick={logGooglePopupUser}>Google Sign-In</Button> 
            <SignUpForm />
        </div>
    )
}

export default Signin